const dark_switch = document.getElementById('dark');
const medium_switch = document.getElementById('medium');
const light_switch = document.getElementById('light');

function switchThemes(){
    if(dark_switch.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        let theme1 = document.documentElement.getAttribute('data-theme');
       console.log('dark checked' + ' ' + theme1);

    } else if(medium_switch.checked){
        document.documentElement.setAttribute('data-theme', 'medium');
        let theme2 = document.documentElement.getAttribute('data-theme');
        console.log('medium checked' + ' ' + theme2);
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        let theme3 = document.documentElement.getAttribute('data-theme');
        console.log('light checked' + ' ' + theme3);
    }
}
    dark_switch.addEventListener('change', switchThemes, false);
    medium_switch.addEventListener('change', switchThemes, false);
    light_switch.addEventListener('change', switchThemes, false);