import {User, Link} from "@nextui-org/react";
import { UserType, AttributeType } from '@aws-sdk/client-cognito-identity-provider';

interface User extends Omit<UserType, 'Attributes'> {
  Attributes?: { Name: string; Value: string }[];
}

import React, { useState, useEffect, use } from 'react';
import { fetchAuthSession } from 'aws-amplify/auth';
import { CognitoIdentityProviderClient, ListUsersCommand } from '@aws-sdk/client-cognito-identity-provider';

interface User extends Omit<UserType, 'Attributes'> {
  Attributes?: { Name: string; Value: string }[];
  fullName?: string;
  website?: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

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
          secretAccessKey: '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'
        }
      });

      const command = new ListUsersCommand({
        UserPoolId: 'us-east-2_QNU7Mq4pg',
        Limit: 60
      });

      const response = await client.send(command);

      // Transform UserType to User
      const transformedUsers: User[] = (response.Users || []).map(user => {
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
          website: attributes?.['website'] || 'N/A'
        };
      });

      setUsers(transformedUsers);
    } catch (error) {
      console.error('Error listing users:', error);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 pb-8 items-start gap-16">
      {users.map((user) => (
        <div
          key={user.fullName}
          className="bg-gray-400 rounded-3xl p-2 flex items-center w-full"
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
              src: "https://avatars.githubusercontent.com/u/30373425?v=4"
            }}
          />
          </div>
      ))}
    </div>
  );
};

export default UserList;