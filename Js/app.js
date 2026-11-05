import { users } from "../Js/main.js";
console.log(users);

// // 2. CREATE — Yangi foydalanuvchi qo‘shish

// const createUser = newUser => {
//     let emailTekshir = users.some(item => item.email === newUser.email);
//     if (newUser.isActive === undefined) newUser.isActive = true;
//     const sharts = newUser.firstName?.trim() &&
//         newUser.lastName?.trim() &&
//         newUser.age >= 18 &&
//         !emailTekshir &&
//         newUser.email.endsWith(".com") &&
//         newUser.email.includes("@") &&
//         (newUser.role === "admin" || newUser.role === "moderator" || newUser.role === "user") &&
//         newUser.balance >= 0;
    
//     if (!sharts) return "Nimadir xatoku";
    
//     newUser.id = users.length === 0 ? 1 : Math.max(...users.map(item=>item.id))+1;
//      users.push(newUser);
//     return users;
// }

// createUser({
// firstName: "Bobur",
// lastName: "Hasanov",
// age: 25,
// email: "bobur@gmail.com",
// role: "user",
// balance: 600
// });
// console.log(users);

// // ======================================================================

// 3. READ — Foydalanuvchilarni ko‘rish

// const getUser = (  ) => {
//     users.forEach(item => {
//         const { id, firstName, lastName, email, role, balance, isActive } = item;
//         console.log(`
//             ID: ${id}
//             Name: ${firstName} ${lastName}
//             Email: ${email}
//             Role: ${role}
//             Status: ${isActive? "Active":"Inactive"}
//             Balance: $${balance}
//             -----------------
//         `);
//     })
// }
// getUser();


// =======================================================================

// Masala 3. getUserById(id)
// ID orqali bitta foydalanuvchini toping. Topilsa obyektni qaytaring, topilmasa “User not found” xabarini
// qaytaring.

// const getUserById = id => {
//     let findUser = users.find(item => item.id === id);
//     if (!findUser) return "User not found";
//     else return findUser;
// }
// console.log(getUserById(2));
// console.log(getUserById(100));

// ============================================================================

// Masala 4. getUsersByRole(role)
// Berilgan role bo‘yicha foydalanuvchilarni ajrating. Masalan, faqat admin yoki moderatorlarni qaytaring.
// Mos foydalanuvchi bo‘lmasa, bo‘sh array qaytishi mumkin.

// const getUsersByRole = role => users.filter(item => item.role === role);
// console.log(getUsersByRole("moderator"));
// console.log(getUsersByRole("admin"));
// console.log(getUsersByRole("user"));

// ================================================================================
// 4. UPDATE — Foydalanuvchi ma’lumotlarini yangilash
// Masala 5. updateUser(id, updatedData)

// const updateUser = (id, updatedData) => {
//     let findIndexUser = users.findIndex(item => item.id === id);
//     if (findIndexUser === -1) {
//         return "User not found";
//     }
//     if (updatedData.age !== undefined && updatedData.age < 18) {
//         return "18 dan kichik!";
//     }
//     if (updatedData.email) {
//         const emailExists = users.some(item => item.id !== id && item.email === updatedData.email);
//         if (emailExists) {
//             return "Email already exists";
//         }
//     }
//     const validRoles = ["admin", "moderator", "user"];
//     if (updatedData.role && !validRoles.includes(updatedData.role)) {
//         return "Invalid role. Role must be admin, moderator or user";
//     }
//     if (updatedData.balance !== undefined && updatedData.balance < 0) {
//         return "Balance cannot be negative";
//     }
//     users[findIndexUser] = {
//         ...users[findIndexUser],
//         ...updatedData,
//         id: users[findIndexUser].id // ID o'zgarmasligini ta'minlaydi
//     };
//     return users;
// };
// updateUser(1, {
// age: 20,
// balance: 800
// });
// console.log(users);


// ===========================================================================
// 5. DELETE — Foydalanuvchini o‘chirish
// Masala 6. deleteUser(id)
// const deleteUser = id => {
//     let findIndexUser = users.findIndex(item => item.id === id);
//     if (findIndexUser === -1) return "User not found";
//     if (users[findIndexUser].role === "admin") {
//         console.log("Admini o'chirib bo'lmaydi");
//         return users;
        
//     }
//     else users.splice(findIndexUser, 1);
//     return users
// }
// console.log(deleteUser(60));
// console.log(deleteUser(2));
// console.log(deleteUser(1));
// ========================================================================================