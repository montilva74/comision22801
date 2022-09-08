class Button{
    constructor(title, style, className, onClick){
        this.title = title,
        this.style = style,
        this.className = className,
        this.onClick = onClick
    }
}

class Video{
    constructor(title, url, description, width, height, duration){
        this.title = title,
        this.url = url,
        this.description = description,
        this.width = width,
        this.height = height,
        this.duration = duration
    }
}

class Audio{
    constructor(title, url, description, duration){
        this.title = title,
        this.url = url,
        this.description = description,
        this.duration = duration
    }
}

class Lista{
    constructor(elements, styles, className, icon){
        this.elements = elements,
        this.styles = styles,
        this.className = className,
        this.icon = icon,
    }
}



