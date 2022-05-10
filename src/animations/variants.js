export const navVariants = {
    hidden: {
        opacity: 0,
        y: "-250",
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            delay: 0.5,
            stiffness: 50,
        },
    },
};

export const heroContentVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.75,
            duration: 4,
        },
    },
};

export const floatingIconsVariants = {
    hidden: {
        x: "-100vw",
    },
    visible: {
        x: 0,
        transition: {
            delay: 2,
            type: "spring",           
            stiffness: 40,
        },
    },
};