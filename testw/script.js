function toggle(el){
    if(el.className!="home_button_inactive")
    {
        el.src='images/menu_home';
        el.className="home_button_inactive";
    }
    else if(el.className=="home_button_inactive")
    {
        el.src='images/menu_home_active';
        el.className="home_button";
    }

    return false;
}
