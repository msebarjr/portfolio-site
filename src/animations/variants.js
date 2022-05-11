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
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 2,
            mass: 0.5,
            damping: 8,
            type: "spring",
            stiffness: 40,
        },
    },
};

export const slideToRightVariant = {
    hidden: {
        x: "-100vw",
    },
    visible: {
        x: 0,
        transition: {
            type: "tween",
            duration: 1.2,
        },
    },
};

export const slideToLeftVariant = {
    hidden: {
        x: "100vw",
    },
    visible: {
        x: 0,
        transition: {
            type: "tween",
            duration: 1.2,
        },
    },
};

export const slideUpVariant = {
    hidden: {
        y: "100vh",
    },
    visible: {
        y: 0,
        transition: {
            type: "tween",
            duration: 1.5,
        },
    },
};

export const modalVariants = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
        },
    },
};
