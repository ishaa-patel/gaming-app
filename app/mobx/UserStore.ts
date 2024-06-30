/* eslint-disable prettier/prettier */
import { action, computed, makeObservable, observable, autorun, runInAction } from 'mobx';
import { createContext, useContext } from 'react';

class UserStore {
    userInfo = {
        id: '101',
        name: 'Code',
        subject: ['MATHS', 'ENGLISH', 'SCIENCE'],
    };
    constructor() {
        makeObservable(this, {
            userInfo: observable,
            totalSubject: computed,
            updateUser: action,
            addSubject: action,
        });
        autorun(this.logUserDetails);
        runInAction(this.prefetchData);
    }

    //create get method to return value
    get totalSubject() {
        console.log('Get Method Invoked');
        return this.userInfo.subject.length;
    }

    //function will depend on the totalSubject,it autorun when there is update in value
    logUserDetails = () => {
        console.log('Subject data:', this.totalSubject);
    };

    //it is temporary action that is immediately invoked.
    prefetchData = () => {
        console.log('Run in action prefetchData function');
    };

    //function to update the username
    updateUser = (name) => {
        return this.userInfo.name = name;
    };

    //function to add subject on the existing list of subjects
    addSubject = (data) => {
        return this.userInfo.subject = [...this.userInfo.subject, data];
    };
}

// Create userstore object
const userstore = new UserStore();

//Create a context with the user store instance.
export const UserStoreContext = createContext(userstore);
export const useUserStore = () => { useContext(UserStoreContext); };
