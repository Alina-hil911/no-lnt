export const getUsers = async () => {
    const result = await fetch('https://randomuser.me/api/?results=20');
    const data = await result.json();
    return data.results;
}