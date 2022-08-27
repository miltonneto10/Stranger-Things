import { subscribeToHellFireClub } from "./firebase/hellfire-clube.js";

(function main() {
    const txtName = document.getElementsById('txtName');
    const txtEmail = document.getElementsById('txtEmail');
    const txtLevel = document.getElementsById('txtLevel');
    const txtCharacter = document.getElementsById('txtCharacter');

    document.getElementById(btnSubscribe).addEventListener('click', async () => {
        const subscription = {
            name: txtName.value,
            email: txtEmail.value,
            level: txtLevel.value,
            character: txtCharacter.value,
    }
        const id = await subscribeToHellFireClub(subscribe);
        alert(`Inscrito com Sucesso: ${id}`);
    });
});