import users from "./users.js";

// 1.
// Отримати загальну суму балансу (поле balance) всіх користувачів.

const calculateTotalBalance = users => {
    const totalBalance = users.reduce((total, user) => total + user.balance, 0)
    return totalBalance
};
console.log(calculateTotalBalance(users));

// 2.
// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

const getUsersWithFriend = (users, friendName) => {
    const usersWithFriend = users.reduce((total, user) => {
        if (user.friends.includes(friendName)) {
            total.push(user.name);
        };
        return total
    }, [])
    return usersWithFriend
};
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// 3.
// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

const getNamesSortedByFriendsCount = users => [...users].sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length).map((user) => user.name);
console.log(getNamesSortedByFriendsCount(users));

// 4.
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути
// повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const getSortedUniqueSkills = users => {
    let allSkills = [];
    users.map(user => allSkills.push(...user.skills));
    let uniqueSkills = [...new Set(allSkills)];
    return uniqueSkills.sort();
};
console.log(getSortedUniqueSkills(users));