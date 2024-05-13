'use client';
import { UserService } from '@/core/services/users/user.service';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

const userService = new UserService();
function ProfileComponent() {
    const query = useQuery({
        queryKey: ['users'],
        queryFn: () => {
            return userService.getUsers();
        },
    });
    useEffect(() => {}, []);

    return <></>;
}

export default ProfileComponent;
