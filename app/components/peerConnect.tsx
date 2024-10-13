import { User, Link } from "@nextui-org/react";
import { UserType } from '@aws-sdk/client-cognito-identity-provider';

interface CustomUser extends Omit<UserType, 'Attributes'> {
  Attributes?: { Name: string; Value: string }[]; // Adjust this as per the returned type
  fullName?: string;
  website?: string;
}

import React, { useState, useEffect } from 'react';
import { fetchAuthSession } from 'aws-amplify/auth';
import { CognitoIdentityProviderClient, ListUsersCommand } from '@aws-sdk/client-cognito-identity-provider';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<CustomUser[]>([]);

  useEffect(() => {
    listUsers();
  }, []);

  const listUsers = async () => {
    try {
      const { tokens } = await fetchAuthSession();
      const jwtToken = tokens?.idToken?.toString();

      if (!jwtToken) {
        throw new Error('No JWT token available');
      }

      const client = new CognitoIdentityProviderClient({
        region: 'us-east-2',
        credentials: {
          accessKeyId: 'AKIA4DMVQG6VG7FLLL2E',
          secretAccessKey: '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',
        }
      });

      const command = new ListUsersCommand({
        UserPoolId: 'us-east-2_QNU7Mq4pg',
        Limit: 60
      });

      const response = await client.send(command);

      // Transform UserType to CustomUser
      const transformedUsers: CustomUser[] = (response.Users || []).map(user => {
        const attributes = user.Attributes?.reduce((acc, attr) => {
          if (attr.Name && attr.Value) {
            acc[attr.Name] = attr.Value;
          }
          return acc;
        }, {} as Record<string, string>);

        return {
          ...user,
          Attributes: user.Attributes,
          fullName: attributes?.['name'] || 'N/A',
          website: attributes?.['website'] || 'N/A',
        } as CustomUser; // Type assertion here
      });

      // TODO: remove (for debugging)
      const duplicateUsers = transformedUsers.concat(transformedUsers).concat(transformedUsers).concat(transformedUsers).concat(transformedUsers).concat(transformedUsers);
      // setUsers(transformedUsers);
      setUsers(duplicateUsers);
    } catch (error) {
      console.error('Error listing users:', error);
    }
  };

  let i = 0;
  return (
    <div className="flex flex-col gap-4 p-4 pb-8 items-start gap-16">
      {users.map((user) => (
        <div
          key={i++}
          className="bg-beige rounded-3xl p-2 flex items-center w-full"
        >
          <User
            key={user.fullName}
            name={user.fullName}
            description={
              <Link href={user.website} size="sm" isExternal>
                {"@" + (user.website)?.replace(/.*\/([^\/]+)\/?$/, '$1')}
              </Link>
            }
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default UserList;
