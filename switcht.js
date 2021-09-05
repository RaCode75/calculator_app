const dark_switch = document.getElementById('dark');
const medium_switch = document.getElementById('medium');
const light_switch = document.getElementById('light');

function switchThemes(){
    if(dark_switch.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        let theme1 = document.documentElement.getAttribute('data-theme');

    } else if(medium_switch.checked){
        document.documentElement.setAttribute('data-theme', 'medium');
        let theme2 = document.documentElement.getAttribute('data-theme');
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        let theme3 = document.documentElement.getAttribute('data-theme');
    }
}
    dark_switch.addEventListener('change', switchThemes, false);
    medium_switch.addEventListener('change', switchThemes, false);
    light_switch.addEventListener('change', switchThemes, false);

    // Hand detected------------------------------
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

if(userPrefersLight){
    document.documentElement.setAttribute('data-theme', 'light');
    light_switch.checked = true;
}else if(userPrefersDark){
    document.documentElement.setAttribute('data-theme', 'dark');
    dark_switch.checked = true;
} else {
    document.documentElement.setAttribute('data-theme', 'medium');
    medium_switch.checked = true;
}