import { action, computed, observable } from "mobx";

import Themes from '../Themes';

export default class ThemeStore {
    @observable activeTheme?: string;

    setTheme = (t: string) => {
        window.localStorage.setItem('theme', t);
        this.activeTheme = t;
    }

    @computed
    get theme() {
        return Themes[this.activeTheme!];
    }

    constructor() {
        const localTheme = window.localStorage.getItem('theme');

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme) {
            this.setTheme('darkTheme');
        } else {
            this.setTheme(localTheme || 'lightTheme');
        }
    }

    @action
    changeTheme = () => {
        if (this.activeTheme! === 'lightTheme') {
            this.setTheme('darkTheme')
        } else {
            this.setTheme('lightTheme')
        }
    };
}