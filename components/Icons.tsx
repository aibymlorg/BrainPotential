import React from 'react';

export const BrainIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M15.5 21c-3.5 0 -6.5 -3 -6.5 -6h-1.5a5 5 0 0 1 -5 -5v-4a5 5 0 0 1 5 -5h8a5 5 0 0 1 5 5v2" />
        <path d="M16 13.5v-1.5a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 0 -1.5 1.5v1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5 -1.5" />
        <path d="M12.5 12.5v-1.5a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 0 -1.5 1.5v1.5a1.5 1.5 0 0 0 1.5 1.5" />
        <path d="M15 11.5v-1.5a1.5 1.5 0 0 0 -1.5 -1.5" />
        <path d="M13 9.5v-1.5a1.5 1.5 0 0 0 -1.5 -1.5" />
    </svg>
);

export const LlmIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="5" y="5" width="14" height="14" rx="1" />
        <path d="M9 9h6v6h-6z" />
        <path d="M3 10h2" />
        <path d="M3 14h2" />
        <path d="M10 3v2" />
        <path d="M14 3v2" />
        <path d="M21 10h-2" />
        <path d="M21 14h-2" />
        <path d="M14 21v-2" />
        <path d="M10 21v-2" />
    </svg>
);