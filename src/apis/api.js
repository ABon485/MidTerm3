import axios from "axios";

export const getUser = async (id) => {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${id}`
        );
        const data = response.data;
        return data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
};

export const getUserRepos = async (id) => {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${id}/repos`
        );
        const data = response.data;
        return data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
};

export const searchUsers = async (text) => {
    try {
        const response = await axios.get(
            `https://api.github.com/search/users?q=${text} `
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};