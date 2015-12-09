// Generates a menu option similar to those generated by model.menu.option from a model.data.period object
export default function(period) {
    return {
        displayString: period.display,
        option: period
    };
}