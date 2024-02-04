export class AuthModel {
  token!: string;
  refreshToken!: string;
  refreshTokenExpiryTime!: Date;

  setAuth(auth: AuthModel) {
    this.token = auth.token;
    this.refreshToken = auth.refreshToken;
    this.refreshTokenExpiryTime = auth.refreshTokenExpiryTime;
  }
}
