dest = {
    set b(val) {
        console.log(`hello set ${val}`);
    }
};

src = {
    get a() {
        console.log('hello get abc');
        return 'abc';
    }
};

Object.assign(dest, src);

console.log('dd' + dest);