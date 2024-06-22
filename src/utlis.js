export const getImgUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};