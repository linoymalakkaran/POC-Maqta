import { Component } from '@angular/core';

import { AtlpTranslationLoaderService } from '@atlp/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
    selector   : 'sample',
    templateUrl: './sample.component.html',
    styleUrls  : ['./sample.component.scss']
})
export class SampleComponent
{
    /**
     * Constructor
     *
     * @param {AtlpTranslationLoaderService} _atlpTranslationLoaderService
     */
    constructor(
        private _atlpTranslationLoaderService: AtlpTranslationLoaderService
    )
    {
        this._atlpTranslationLoaderService.loadTranslations(english, turkish);
    }
}
