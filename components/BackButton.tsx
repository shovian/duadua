'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const BackButton: React.FC = () => {
    const router = useRouter();

    const handleBackClick = () => {
        router.back();
    };

    return (
        <button
            onClick={handleBackClick}
            className="flex items-center justify-center w-32 h-12 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition duration-200"
        >
            <span className="text-lg">Back</span>
        </button>
    );
};

export default BackButton;