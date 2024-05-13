import { ReactElement } from 'react';
type SeparateProps = {
    width?: number | string;
    height?: number | string;
    backgroundColor?: string;
    className?: string;
};
export function SeparateComponent({
    backgroundColor = 'var(--border-color)',
    width = '100%',
    height = '1px',
    className,
}: SeparateProps): ReactElement {
    return (
        <div
            className={className}
            style={{
                width,
                backgroundColor,
                height,
            }}
        ></div>
    );
}
