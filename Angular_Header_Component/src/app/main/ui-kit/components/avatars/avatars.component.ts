import { Component, OnInit } from '@angular/core';
import { ISettingsAvatar, IUserData } from '@atlp/components/avatars/interfaces';

interface IInitialUsers {
  userData: IUserData;
  settingsAvatar: ISettingsAvatar;
}

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.scss']
})
export class AvatarsComponent implements OnInit {

  public initialUsers: IInitialUsers[] = [
    {
      userData: {
        firstName: 'Oleg',
        lastName: 'Andre',
        imgUrl: '',
      },
      settingsAvatar: {
        round: false,
        size: 'tiny',
      }
    },
    {
      userData: {
        firstName: 'Oleg',
        lastName: 'Andre',
        imgUrl: '',
      },
      settingsAvatar: {
        round: false,
        size: 'small',
      }
    },
    {
      userData: {
        firstName: 'Oleg',
        lastName: 'Andre',
        imgUrl: '',
      },
      settingsAvatar: {
        round: false,
        size: 'medium',
      }
    },
    {
      userData: {
        firstName: 'Oleg',
        lastName: 'Andre',
        imgUrl: '',
      },
      settingsAvatar: {
        round: false,
        size: 'large',
      }
    },
  ];

  public fallbackUsers: IInitialUsers[] = [
    {
      userData: {
        firstName: '',
        lastName: '',
        imgUrl: '',
      },
      settingsAvatar: {
        round: false,
        size: 'tiny',
      }
    },
    {
      userData: {
        firstName: '',
        lastName: '',
        imgUrl: '',
      },
      settingsAvatar: {
        round: false,
        size: 'small',
      }
    },
    {
      userData: {
        firstName: '',
        lastName: '',
        imgUrl: '',
      },
      settingsAvatar: {
        round: false,
        size: 'medium',
      }
    },
    {
      userData: {
        firstName: '',
        lastName: '',
        imgUrl: '',
      },
      settingsAvatar: {
        round: false,
        size: 'large',
      }
    },
  ];

  public photoUsers: IInitialUsers[] = [
    {
      userData: {
        firstName: 'Oleg',
        lastName: 'Andre',
        imgUrl: 'assets/images/avatars/avatar.png',
      },
      settingsAvatar: {
        round: false,
        size: 'tiny',
      }
    },
    {
      userData: {
        firstName: 'Oleg',
        lastName: 'Andre',
        imgUrl: 'assets/images/avatars/avatar.png',
      },
      settingsAvatar: {
        round: false,
        size: 'small',
      }
    },
    {
      userData: {
        firstName: 'Oleg',
        lastName: 'Andre',
        imgUrl: 'assets/images/avatars/avatar.png',
      },
      settingsAvatar: {
        round: false,
        size: 'medium',
      }
    },
    {
      userData: {
        firstName: 'Oleg',
        lastName: 'Andre',
        imgUrl: 'assets/images/avatars/avatar.png',
      },
      settingsAvatar: {
        round: false,
        size: 'large',
      }
    },
  ];

  public roundUsers: IInitialUsers[] = [
    {
      userData: {
        firstName: '',
        lastName: '',
        imgUrl: 'assets/images/avatars/avatar.png',
      },
      settingsAvatar: {
        round: true,
        size: 'tiny',
      }
    },
    {
      userData: {
        firstName: '',
        lastName: '',
        imgUrl: 'assets/images/avatars/avatar.png',
      },
      settingsAvatar: {
        round: true,
        size: 'small',
      }
    },
    {
      userData: {
        firstName: '',
        lastName: '',
        imgUrl: 'assets/images/avatars/avatar.png',
      },
      settingsAvatar: {
        round: true,
        size: 'medium',
      }
    },
    {
      userData: {
        firstName: '',
        lastName: '',
        imgUrl: 'assets/images/avatars/avatar.png',
      },
      settingsAvatar: {
        round: true,
        size: 'large',
      }
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
