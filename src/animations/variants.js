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

export const slideToLeftVariant = {
    hidden: {
        x: "100vw",
    },
    visible: {
        x: 0,
        transition: {
            type: "tween",
            duration: 0.75,
        },
    },
};

export const slideUpVariant = {
    hidden: {
        y: "100vw",
    },
    visible: {
        y: 0,
        transition: {
            type: "tween",
            duration: 0.75,
        },
    },
};
