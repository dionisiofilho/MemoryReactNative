class ListUtil {

    static randomItems = (items) => {
        let ctr = items.length;
        let temp;
        let index;

        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = items[ctr];
            items[ctr] = items[index];
            items[index] = temp;
        }
        return items;
    }

    static generateList = () => {
        return [
            { name: "JS", icon: require('../resources/img/java-script.png'), checked: false },
            { name: "PHP", icon: require('../resources/img/php.png'), checked: false },
            { name: "SWIFT", icon: require('../resources/img/swift.png'), checked: false },
            { name: "NODEJS", icon: require('../resources/img/nodejs.png'), checked: false },
            { name: "PYTHON", icon: require('../resources/img/python.png'), checked: false },
            { name: "JAVA", icon: require('../resources/img/java.png'), checked: false },
            { name: "ANDROID", icon: require('../resources/img/android.png'), checked: false },
            { name: "APPLE", icon: require('../resources/img/apple.png'), checked: false },

            { name: "JS", icon: require('../resources/img/java-script.png'), checked: false },
            { name: "PHP", icon: require('../resources/img/php.png'), checked: false },
            { name: "SWIFT", icon: require('../resources/img/swift.png'), checked: false },
            { name: "NODEJS", icon: require('../resources/img/nodejs.png'), checked: false },
            { name: "PYTHON", icon: require('../resources/img/python.png'), checked: false },
            { name: "JAVA", icon: require('../resources/img/java.png'), checked: false },
            { name: "ANDROID", icon: require('../resources/img/android.png'), checked: false },
            { name: "APPLE", icon: require('../resources/img/apple.png'), checked: false },
        ];
    }

}
export default ListUtil;