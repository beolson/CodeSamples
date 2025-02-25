import React from 'react';
const Lines = (props: { count: number }) => {
    return (
        <>
            {[...Array(props.count)].map((_, i) => (
                <div className={` pl-1 text-base hover:text-neutral-400`}>
                    Line s {i}
                </div>
            ))}
        </>
    );
};

export const SideBarPlaceholder = () => {
    return (
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">logo</div>
            <nav className="flex flex-1 flex-col">
                <Lines count={100} />
            </nav>
        </div>
    );
};
