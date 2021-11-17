"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  common: {
    table: {
      products: {
        actions: 'Actions',
        height: 'Height',
        id: 'Id',
        image: 'Image',
        length: 'Length',
        name: 'Name',
        reserved: 'Reserved',
        stored: 'Stored',
        weight: 'Weight',
        width: 'Width'
      },
      reservationGroup: {
        group: 'Group',
        product: 'Product',
        actions: 'Actions',
        asigned: 'Asigned User',
        categories: 'Categories',
        completed: 'Completed',
        deadline: 'Deadline',
        description: 'Description',
        groupId: 'Group Id',
        height: 'Height',
        id: 'Id',
        imageID: 'Image',
        length: 'Length',
        name: 'Name',
        productID: 'Product Id',
        reserved: 'Reserved',
        reservedAmount: 'Reserved Amount',
        reserver: 'Reserver',
        size: 'Size',
        status: 'Status',
        stored: 'Stored',
        subReservations: 'Sub Reservations',
        warehouse: 'Warehouse',
        weight: 'Weight',
        width: 'Width'
      },
      warehouse: {
        actions: 'Actions',
        country: 'Country',
        name: 'Name',
        postalcode: 'Postal Code',
        search: 'Search Warehouse',
        streetname: 'Streetname',
        town: 'Town',
        addWarehouse: 'Add Warehouse'
      }
    },
    part: {
      columnDefintion: {
        header: 'Choose which columns should be displayed'
      },
      lang: {
        label: 'Language'
      },
      userMenu: {
        account: 'Account Settings',
        addHour: 'Logout timer',
        changeTheme: 'Change Theme',
        header: ' Settings',
        logOut: 'Loug Out',
        profile: 'Profile',
        setSnackbarActivity: 'Show Confirmation for every Request',
        timeLeft: 'Time Left'
      }
    }
  },
  components: {
    login: {
      applicationName: 'Storage Buffer',
      changePassword: 'Seems like this is your first time, please change your password',
      confirmPassword: 'Confirm Password',
      email: 'Email',
      loginTo: 'Login in to your SB Account',
      newPassword: 'New Password',
      password: 'Password',
      signIn: 'Sign In',
      update: 'Update'
    },
    sidebar: {
      items: {
        inventory: 'Inventory System',
        products: 'Products',
        reservation: 'Reservation System',
        settings: 'Settings',
        statistics: 'Statistics',
        user: 'User Management',
        warehouse: 'Warehouse'
      }
    }
  },
  dataTable: {
    ariaLabel: {
      sortNone: 'None'
    }
  },
  form: {
    rule: {
      length: '{0} can not have more than {1} characters',
      numberOnly: '{0} can only contain numbers',
      required: '{0} is mandatory'
    },
    add: 'Add',
    close: 'Close',
    cancel: 'Cancel',
    save: 'Save'
  },
  snackbar: {
    http: {
      success: {
        message: 'Request was performed sucessful',
        title: 'Sucess !'
      },
      bad: {
        post: {
          message: 'The given data is incorrect or missing.',
          title: 'Incorrect Data'
        },
        get: {
          message: 'Could not load data',
          title: 'Loading error'
        },
        put: {
          message: 'The update attempt was not successful',
          title: 'Update error'
        },
        "delete": {
          message: 'The delete attempt was not succesful',
          title: 'Delete error'
        },
        unkown: {
          message: 'There was an unkown error',
          title: 'Unkown error'
        }
      }
    },
    change: {
      message: 'Value was changed successful',
      title: 'Changed successful'
    }
  },
  pages: {
    apiChange: {
      header: 'Server Settings',
      text: 'Change the targetting Server',
      label: 'Server Url',
      changeApi: 'Change Api',
      safeMode: 'Log out on website change'
    },
    error: {
      notFound: 'We are sorry but we could not find what you were looking for',
      tip: 'Okay take me to the last page',
      back: 'Go back'
    },
    productview: {
      description: 'Description',
      height: 'Height',
      name: 'Name',
      weight: 'Weight',
      width: 'Width',
      "delete": 'Delete'
    },
    productadd: {
      weight: 'Gewicht',
      width: 'Breite',
      height: 'Höhe',
      information: 'Information',
      dimensions: 'Dimension',
      add: 'Add Product',
      clear: 'Reset Form',
      description: 'Description',
      name: 'Name',
      length: 'Length'
    },
    products: {
      view: {
        addProduct: 'Add Product',
        checkLocation: 'Check Location',
        deleteText: 'Delete Product',
        dimensions: 'Product Dimensions',
        height: 'Height',
        length: 'Length',
        name: 'Product',
        productUpdated: 'Product Updated',
        volume: 'Volume',
        volumeUnit: 'cm^3',
        volumeWeight: 'Weight per cm^3',
        weight: 'Weight',
        width: 'Width'
      },
      add: 'Add Product',
      search: 'Search Product'
    },
    profile: {
      applicationSettings: 'Application Settings',
      confirm: 'Confirm',
      email: 'Email',
      firstName: 'Firstname',
      joinDate: 'Join Date',
      lastName: 'Lastname',
      newPassword: 'New Password',
      password: 'Current Password',
      passwordChange: 'Password Change',
      svNumber: 'Sv Number',
      updatePassword: 'Change password',
      username: 'Username',
      yourAccount: 'Your Account',
      yourInformation: 'Your Information'
    },
    reservation: {
      groups: {
        add: {
          addGroup: 'Add Group',
          name: 'Reservation Group Name',
          worker: 'Asigned Worker',
          addToGroup: 'Add to Group',
          asignedWorker: 'Asigned Worker',
          addReservation: 'Add Reservation to Group',
          product: 'Product',
          amount: 'Amount'
        },
        addText: 'Add a new Group',
        addGroup: 'Add Group',
        name: 'Name',
        status: 'Status',
        deadline: 'Deadline'
      },
      group: 'Groups',
      reserved: 'Reserved',
      workers: 'Workers'
    },
    user: {
      card: {
        edit: 'Edit user',
        disable: "Disable user",
        ranks: "Ranks",
        firstName: "Firstname",
        lastName: "Lastname",
        email: "Email",
        svn: "Svn",
        update: "Update"
      },
      allUser: 'All Users',
      createUser: 'Create User',
      currentAmount: 'There are currently {0} users registerd',
      email: 'Email',
      firstName: 'Firstname',
      lastName: 'Lastname',
      newUser: 'New User',
      password: 'Password',
      svn: 'Social Security Number'
    },
    warehouse: {
      add: {
        clear: 'Reset',
        country: 'Country',
        description: 'Description',
        name: 'Name',
        postalcode: 'Postalcode',
        streetname: 'Streetname',
        streetnumber: 'Streetnumber',
        town: 'Town',
        location: 'Location',
        warehouse: 'Warehouse'
      },
      edit: {
        toggle: 'Shelf is full',
        shelf: 'Edit Shelf',
        saveText: 'Save your current changes to this shelf.',
        amount: 'Amount',
        amountText: 'Manipulate the Amount of Products inside the Shelf',
        selectProduct: 'Select Product',
        selectText: 'Select an Product for the Shelf',
        noProductName: 'Shelf is Empty',
        page: 'Shelf',
        shelfId: 'Shelf Name',
        productName: 'Product Name',
        general: 'General',
        "delete": 'Delete',
        deleteText: 'Delete this Shelf from the Warehouse',
        add: 'Add',
        addText: 'Add a Product to this shelf'
      },
      view: {
        warehouseName: 'Warehouse Name',
        manage: 'Manage the Warehouse',
        manageText: 'Create analyzed documents about this warehouse in just a single click',
        editText: 'Edit the warehouse information ',
        deleteText: 'You only can delete a Warehouse when there are no shelfs inside',
        checkShelfs: 'View the current status of shelfs'
      }
    }
  }
};
exports["default"] = _default;