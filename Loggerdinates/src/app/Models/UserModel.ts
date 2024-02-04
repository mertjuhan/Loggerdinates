import {AuthModel} from "./AuthModel";
import {AddressModel} from "./AdressModel";
import {SocialNetworksModel} from "./SocialNetworksModel";

export class UserModel extends AuthModel {
  id: string;
  userName: string;
  password: string;
  fullname: string;
  email: string;
  imageUrl: string;
  roles: number[] = [];
  occupation: string;
  company: string;
  department: string;
  section: string;
  phoneNumber: string;
  otherNumber?: string;
  nationalCode: string;
  nationalCodeOther: string;
  functionName?: string;
  address?: AddressModel;
  country?: string;
  zipCode?: string;
  additiontoAddress?: string;
  city?: string;
  currency?: string;
  socialNetworks?: SocialNetworksModel;
  // personal information
  firstName: string;
  lastName: string;
  website: string;
  // account information
  language: string;
  timeZone: string;
  communication: {
    email: boolean;
    sms: boolean;
    phone: boolean;
  };
  // email settings
  emailSettings?: {
    emailNotification: boolean;
    sendCopyToPersonalEmail: boolean;
    activityRelatesEmail: {
      youHaveNewNotifications: boolean;
      youAreSentADirectMessage: boolean;
      someoneAddsYouAsAsAConnection: boolean;
      uponNewOrder: boolean;
      newMembershipApproval: boolean;
      memberRegistration: boolean;
    };
    updatesFromKeenthemes: {
      newsAboutKeenthemesProductsAndFeatureUpdates: boolean;
      tipsOnGettingMoreOutOfKeen: boolean;
      thingsYouMissedSindeYouLastLoggedIntoKeen: boolean;
      newsAboutMetronicOnPartnerProductsAndOtherServices: boolean;
      tipsOnMetronicBusinessProducts: boolean;
    };
  };

  setUser(_user: unknown) {
    const user = _user as UserModel;
    this.id = user.id;
    this.userName = user.userName || '';
    this.password = user.password || '';
    this.fullname = user.fullname || '';
    this.email = user.email || '';
    this.imageUrl = user.imageUrl || './assets/media/avatars/blank.png';
    this.roles = user.roles || [];
    this.occupation = user.occupation || '';
    this.company = user.company || '';
    this.phoneNumber = user.phoneNumber || '';
    //this.address = user.address;
    //this.socialNetworks = user.socialNetworks;
  }
}
