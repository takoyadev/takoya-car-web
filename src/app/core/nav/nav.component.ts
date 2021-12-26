import {Component, Inject, OnInit} from '@angular/core';
import {AuthClientConfig, AuthService} from "@auth0/auth0-angular";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  hasCarsAccess: boolean | undefined;
  hasMaintenancesAccess: boolean | undefined;
  hasOwnersAccess: boolean | undefined;

  constructor(
    @Inject(DOCUMENT) public _document: Document,
    public _auth: AuthService,
    public _authConf: AuthClientConfig,
  ) { }

  ngOnInit(): void {
    this._auth.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        console.log(this._authConf.get().scope);
        this.hasCarsAccess = true;
        this.hasMaintenancesAccess = true;
        this.hasOwnersAccess = true;
      }
    });
  }

}
