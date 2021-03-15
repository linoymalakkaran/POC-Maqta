import { Component, OnDestroy, OnInit } from '@angular/core';
import { AtlpProgressBarService } from '@atlp/components/progress-bar/progress-bar.service';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';
import { IconsService } from '@atlp/services/icons.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-complementary',
  templateUrl: './complementary.component.html',
  styleUrls: ['./complementary.component.scss']
})
export class ComplementaryComponent{}

