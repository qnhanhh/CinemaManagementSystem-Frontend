export const movieSize = {
    sm: "w-56 h-36",
    md: "w-64 h-40",
    lg: "w-96 h-52",
};

export interface MovieItemProps {
    title: string,
    description?: string,
    imageUrl: string,
    size: string
}