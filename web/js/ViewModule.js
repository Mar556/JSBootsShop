import {loginModule} from './LoginModule.js';
import {managerModule} from './ManagerModule.js';
import {adminModule} from './AdminModule.js';
import {userModule} from './UserModule.js';
class ViewModule {
    showLoginForm() {
        document.getElementById("info").innerHTML = '';
        const content = document.getElementById('content');
        content.innerHTML = 
            `<div class="login-container">
                <div class="imgcontainer">
                </div>
                
                <div class="container">
                    <form method="post" class="form">
                    <label><b>Login</b></label>
                    <input id="username" name="username" type="username" required> <br>
                    
                    <label><b>Password</b></label>
                    <input type="password" id="password" name="password" required>
                    
                    <button id="btnLogin" type="submit">Enter</button>
                    <button id="btnRegistration" type="submit">Register</button>
                    <label class="remember">
                    </label>
                    </form>
                </div>
            </div>`;
        document.getElementById('password').addEventListener('keypress',(e)=>{
            if(e.key === 'Enter'){
                e.preventDefault();
                loginModule.sendCredential();
            }
        });
        const btnLogin = document.getElementById('btnLogin');
        btnLogin.addEventListener('click', (e) => {
            e.preventDefault();
            loginModule.sendCredential();
        });
        const btnRegistration = document.getElementById('btnRegistration');
        btnRegistration.addEventListener('click', (e) => {
            e.preventDefault();
            viewModule.showRegistrationForm();
        });
    };
    showRegistrationForm() {
        document.getElementById('info').innerHTML = "";
        const content = document.getElementById('content');
        content.innerHTML = 
            `<div class="registration-container">
                <div class="">
                    
                        
                            <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
                       
                </div>
                <div class="input-container">
                  
                    <input class="input-field" id="first-name" placeholder="First name" name="firstname" required>
                </div>

                <div class="input-container">
                    
                    <input class="input-field" id="last-name" placeholder="Last name" name="lastname" required>
                </div>

                <div class="input-container">
                    
                    <input class="input-field" id="username" placeholder="Username" name="username" required>
                </div>
                    
                <div class="input-container">
                    
                    <input class="input-field" id="password1" type="password" placeholder="Password" name="password1" required>
                </div>
        
                <div class="input-container">
                    
                    <input class="input-field" id="password2" type="password" placeholder="Repeat password" name="password2" required>
                </div>
                
                <div class="input-container">
                    
                    <input class="input-field" id="phone" placeholder="Phone" name="phone" required>
                </div>
            
                <div class="input-container">
                    
                    <input class="input-field" id="money" placeholder="$" name="money" required>
                </div>
            
                <button type="submit" id="register">Register</button>
            </div>`;
        const register = document.getElementById('register');
        register.addEventListener('click', (e) => {
            e.preventDefault();
            loginModule.registration();
        });
    }
    showCreateModel() {
        document.getElementById("info").innerHTML = '';
        const content = document.getElementById('content');
        content.innerHTML = 
        `<div class="shoe-add-container">
            <div class="top-content">
                <span class="container-title">Add Shoes</span>
            </div>
            <form method="post" class="form" id="form_model">  
                <div class="wrap-input100 validate-input" >
                    <input class="input100"  id="name" name="name" placeholder="Model name">
                </div>
                <div class="wrap-input100 validate-input" >
                    <input class="input100" id="brand" name="brand" placeholder="Model brand">
                </div>
                <div class="wrap-input100 validate-input">
                    <input class="input100"  id="size" name="size" placeholder="Model size">
                </div>
                <div class="wrap-input100 validate-input">
                    <input class="input100"  id="price" name="price" placeholder="Price">
                </div>
                <div class="wrap-input100 validate-input" >
                    <input class="input100" id="amount" name="amount" placeholder="Amount">
                </div>
                <div class="container-login100-form-btn">
                    <button class="login100-form-btn" "id="add-model" type="submit">Add shoes</button>
                </div>
            </form>
        </div>`;
        document.getElementById('form_model').addEventListener('submit',e=>{
            e.preventDefault();
            managerModule.createModel();
        });
    }
    showEditModel() {
        const content = document.getElementById('content');
        content.innerHTML = 
        `<div class="shoe-edit-container">
            <div class="top-content">
                <span class="model-edit-title">Edit Shoes</span>
            </div>
            <div class="mid-content">
                <label for="list models">Model list:</label>
                <select name="list models" id="select_models">

                </select>
                <div class="wrap-input100 validate-input" data-validate="Enter name">
                    <input class="input100" id="name" name="name" placeholder="Model name">
                </div>
                <div class="wrap-input100 validate-input" data-validate="Enter brand">
                    <input class="input100" id="brand" name="brand" placeholder="Model brand">
                </div>
                <div class="wrap-input100 validate-input" data-validate="Enter size">
                    <input class="input100" id="size" name="size" placeholder="Model size">
                </div>
                <div class="wrap-input100 validate-input" data-validate="Enter price">
                    <input class="input100" id="price" name="price" placeholder="Price">
                </div>
                <div class="wrap-input100 validate-input" data-validate="Enter amount">
                    <input class="input100" id="amount" name="amount" placeholder="Amount">
                </div>
                <div class="container-login100-form-btn">
                    <button class="login100-form-btn" type="submit" id="edit-model">Edit</button>
                </div>
            </div>
        </div>`;
        document.getElementById('edit-model').addEventListener('click',(e)=>{
            e.preventDefault();
            managerModule.changeModel();
        });
    }
    showBuyModel() {
        const content = document.getElementById('content');
        content.innerHTML = 
        `<div class="shoe-edit-container">
            <div class="top-content">
                <span class="model-edit-title">Shoes buy</span>
            </div>
            <div class="mid-content">
                <label for="list models">Model list:</label>
                <select name="list models" id="select_models">

                </select>
                <div class="container-login100-form-btn">
                    <button class="login100-form-btn" type="submit" id="buy-shoe">Buy</button>
                </div>
            </div>
        </div>`;
        document.getElementById('buy-shoe').addEventListener('click',(e)=>{
            e.preventDefault();
            userModule.buyShoe();
        });
    }
    showEditRole(){
        document.getElementById("info").innerHTML = '';
        const content = document.getElementById('content');
        content.innerHTML = 
            `<div class="shoe-edit-container">
                <div class="top-content">
                    <span class="model-edit-title">Edit shoes</span>
                </div>
                <div class="mid-content">
                    <label for="list users">Users</label>
                    <select name="list users" id="select_users">

                    </select>
                    <label for="list roles">Roles</label>
                    <select name="list roles" id="select_roles">

                    </select>
                    <div class="container-login100-form-btn">
                        <button class="login100-form-btn" type="submit" id="edit-role">Edit Role</button>
                    </div>
                </div>
             </div>`;
        
        document.getElementById('edit-role').addEventListener('click',(e)=>{
            e.preventDefault();
            adminModule.setNewRole();
        });
    }
    showProfile(){
        document.getElementById("info").innerHTML = '';
        let authUser = JSON.parse(sessionStorage.getItem('user'));
        const content = document.getElementById('content');
        content.innerHTML =`
                
                        
                        </filter>
                    </svg>
                    <h2 filter-content="S">Edit Profile</h2>
                </div>
                <div class="input-container">
                    <img src="Images/first_name.png" class="input-img"></img>
                    <input class="input-field" id="firstname" type="text" placeholder="First name" name="firstname" value="${authUser.firstname}" required>
                </div>

                <div class="input-container">
                    <img src="Images/last_name.png" class="input-img"></img>
                    <input class="input-field" id="lastname" type="text" placeholder="Last name" name="lastname" value="${authUser.lastname}" required>
                </div>

                <div class="input-container">
                    <img src="Images/username.png" class="input-img"></img>
                    <input class="input-field" id="login" type="text" placeholder="Login" name="login" readonly value="${authUser.username}" required>
                </div>                   
                
                <div class="input-container">
                    <img src="Images/phone.png" class="input-img"></img>
                    <input class="input-field" id="phone" type="text" placeholder="Phone" name="phone" value="${authUser.phone}" required>
                </div>
            
                <div class="input-container">
                    <img src="Images/money.png" class="input-img"></img>
                    <input class="input-field" id="money" type="number" placeholder="Add Money" name="money" value="" required>
                </div>
            
                <button type="submit" id="edit_profile">Edit</button>
            </div>`;
        const edit_profile = document.getElementById('edit_profile');
        edit_profile.addEventListener('click', (e)=>{
            e.preventDefault();
            userModule.editProfile();
        });
    }
}
const viewModule = new ViewModule();
export {viewModule};