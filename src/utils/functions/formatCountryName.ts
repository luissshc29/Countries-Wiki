export default function formatCountryName(name: string) {
    var splitName = name.includes("-") ? name.split("-") : name.split("_");

    var capitalizedSplitName = splitName.map(
        (name) => name.charAt(0).toUpperCase() + name.slice(1)
    );

    var urlName = name.includes("-")
        ? capitalizedSplitName.join("%20")
        : capitalizedSplitName.join("-");

    var capitalizedName = name.includes("-")
        ? capitalizedSplitName.join(" ")
        : capitalizedSplitName.join("-");

    return { urlName, capitalizedName };
}
