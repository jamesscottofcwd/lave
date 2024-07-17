// Define an interface for the foreground style parameters
interface ForegroundStyle {
    color?: string;
    fontSize?: string;
    fontWeight?: string;
}

// Function to set foreground styles on an HTML element
const setForegroundStyle = (element: HTMLElement, style: ForegroundStyle): void => {
    if (style.color) {
        element.style.color = style.color;
    }
    if (style.fontSize) {
        element.style.fontSize = style.fontSize;
    }
    if (style.fontWeight) {
        element.style.fontWeight = style.fontWeight;
    }
};

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    const myElement = document.getElementById('myElement');
    if (myElement) {
        // Apply foreground styles to the element
        setForegroundStyle(myElement, {
            color: 'blue',
            fontSize: '20px',
            fontWeight: 'bold'
        });
    }
});
