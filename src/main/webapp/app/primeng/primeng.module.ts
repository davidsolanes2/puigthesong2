
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PuigthesongButtonDemoModule } from './buttons/button/buttondemo.module';
import { PuigthesongSplitbuttonDemoModule } from './buttons/splitbutton/splitbuttondemo.module';

import { PuigthesongDialogDemoModule } from './overlay/dialog/dialogdemo.module';
import { PuigthesongConfirmDialogDemoModule } from './overlay/confirmdialog/confirmdialogdemo.module';
import { PuigthesongLightboxDemoModule } from './overlay/lightbox/lightboxdemo.module';
import { PuigthesongTooltipDemoModule } from './overlay/tooltip/tooltipdemo.module';
import { PuigthesongOverlayPanelDemoModule } from './overlay/overlaypanel/overlaypaneldemo.module';
import { PuigthesongSideBarDemoModule } from './overlay/sidebar/sidebardemo.module';

import { PuigthesongKeyFilterDemoModule } from './inputs/keyfilter/keyfilterdemo.module';
import { PuigthesongInputTextDemoModule } from './inputs/inputtext/inputtextdemo.module';
import { PuigthesongInputTextAreaDemoModule } from './inputs/inputtextarea/inputtextareademo.module';
import { PuigthesongInputGroupDemoModule } from './inputs/inputgroup/inputgroupdemo.module';
import { PuigthesongCalendarDemoModule } from './inputs/calendar/calendardemo.module';
import { PuigthesongCheckboxDemoModule } from './inputs/checkbox/checkboxdemo.module';
import { PuigthesongChipsDemoModule } from './inputs/chips/chipsdemo.module';
import { PuigthesongColorPickerDemoModule } from './inputs/colorpicker/colorpickerdemo.module';
import { PuigthesongInputMaskDemoModule } from './inputs/inputmask/inputmaskdemo.module';
import { PuigthesongInputSwitchDemoModule } from './inputs/inputswitch/inputswitchdemo.module';
import { PuigthesongPasswordIndicatorDemoModule } from './inputs/passwordindicator/passwordindicatordemo.module';
import { PuigthesongAutoCompleteDemoModule } from './inputs/autocomplete/autocompletedemo.module';
import { PuigthesongSliderDemoModule } from './inputs/slider/sliderdemo.module';
import { PuigthesongSpinnerDemoModule } from './inputs/spinner/spinnerdemo.module';
import { PuigthesongRatingDemoModule } from './inputs/rating/ratingdemo.module';
import { PuigthesongSelectDemoModule } from './inputs/select/selectdemo.module';
import { PuigthesongSelectButtonDemoModule } from './inputs/selectbutton/selectbuttondemo.module';
import { PuigthesongListboxDemoModule } from './inputs/listbox/listboxdemo.module';
import { PuigthesongRadioButtonDemoModule } from './inputs/radiobutton/radiobuttondemo.module';
import { PuigthesongToggleButtonDemoModule } from './inputs/togglebutton/togglebuttondemo.module';
import { PuigthesongEditorDemoModule } from './inputs/editor/editordemo.module';

import { PuigthesongGrowlDemoModule } from './messages/growl/growldemo.module';
import { PuigthesongMessagesDemoModule } from './messages/messages/messagesdemo.module';
import { PuigthesongGalleriaDemoModule } from './multimedia/galleria/galleriademo.module';

import { PuigthesongFileUploadDemoModule } from './fileupload/fileupload/fileuploaddemo.module';

import { PuigthesongAccordionDemoModule } from './panel/accordion/accordiondemo.module';
import { PuigthesongPanelDemoModule } from './panel/panel/paneldemo.module';
import { PuigthesongTabViewDemoModule } from './panel/tabview/tabviewdemo.module';
import { PuigthesongFieldsetDemoModule } from './panel/fieldset/fieldsetdemo.module';
import { PuigthesongToolbarDemoModule } from './panel/toolbar/toolbardemo.module';
import { PuigthesongGridDemoModule } from './panel/grid/griddemo.module';
import { PuigthesongScrollPanelDemoModule } from './panel/scrollpanel/scrollpaneldemo.module';
import { PuigthesongCardDemoModule } from './panel/card/carddemo.module';

import { PuigthesongDataTableDemoModule } from './data/datatable/datatabledemo.module';
import { PuigthesongTableDemoModule } from './data/table/tabledemo.module';
import { PuigthesongDataGridDemoModule } from './data/datagrid/datagriddemo.module';
import { PuigthesongDataListDemoModule } from './data/datalist/datalistdemo.module';
import { PuigthesongDataScrollerDemoModule } from './data/datascroller/datascrollerdemo.module';
import { PuigthesongPickListDemoModule } from './data/picklist/picklistdemo.module';
import { PuigthesongOrderListDemoModule } from './data/orderlist/orderlistdemo.module';
import { PuigthesongScheduleDemoModule } from './data/schedule/scheduledemo.module';
import { PuigthesongTreeDemoModule } from './data/tree/treedemo.module';
import { PuigthesongTreeTableDemoModule } from './data/treetable/treetabledemo.module';
import { PuigthesongPaginatorDemoModule } from './data/paginator/paginatordemo.module';
import { PuigthesongGmapDemoModule } from './data/gmap/gmapdemo.module';
import { PuigthesongOrgChartDemoModule } from './data/orgchart/orgchartdemo.module';
import { PuigthesongCarouselDemoModule } from './data/carousel/carouseldemo.module';

import { PuigthesongBarchartDemoModule } from './charts/barchart/barchartdemo.module';
import { PuigthesongDoughnutchartDemoModule } from './charts/doughnutchart/doughnutchartdemo.module';
import { PuigthesongLinechartDemoModule } from './charts/linechart/linechartdemo.module';
import { PuigthesongPiechartDemoModule } from './charts/piechart/piechartdemo.module';
import { PuigthesongPolarareachartDemoModule } from './charts/polarareachart/polarareachartdemo.module';
import { PuigthesongRadarchartDemoModule } from './charts/radarchart/radarchartdemo.module';

import { PuigthesongDragDropDemoModule } from './dragdrop/dragdrop/dragdropdemo.module';

import { PuigthesongMenuDemoModule } from './menu/menu/menudemo.module';
import { PuigthesongContextMenuDemoModule } from './menu/contextmenu/contextmenudemo.module';
import { PuigthesongPanelMenuDemoModule } from './menu/panelmenu/panelmenudemo.module';
import { PuigthesongStepsDemoModule } from './menu/steps/stepsdemo.module';
import { PuigthesongTieredMenuDemoModule } from './menu/tieredmenu/tieredmenudemo.module';
import { PuigthesongBreadcrumbDemoModule } from './menu/breadcrumb/breadcrumbdemo.module';
import { PuigthesongMegaMenuDemoModule } from './menu/megamenu/megamenudemo.module';
import { PuigthesongMenuBarDemoModule } from './menu/menubar/menubardemo.module';
import { PuigthesongSlideMenuDemoModule } from './menu/slidemenu/slidemenudemo.module';
import { PuigthesongTabMenuDemoModule } from './menu/tabmenu/tabmenudemo.module';

import { PuigthesongBlockUIDemoModule } from './misc/blockui/blockuidemo.module';
import { PuigthesongCaptchaDemoModule } from './misc/captcha/captchademo.module';
import { PuigthesongDeferDemoModule } from './misc/defer/deferdemo.module';
import { PuigthesongInplaceDemoModule } from './misc/inplace/inplacedemo.module';
import { PuigthesongProgressBarDemoModule } from './misc/progressbar/progressbardemo.module';
import { PuigthesongRTLDemoModule } from './misc/rtl/rtldemo.module';
import { PuigthesongTerminalDemoModule } from './misc/terminal/terminaldemo.module';
import { PuigthesongValidationDemoModule } from './misc/validation/validationdemo.module';
import { PuigthesongProgressSpinnerDemoModule } from './misc/progressspinner/progressspinnerdemo.module';

@NgModule({
    imports: [

        PuigthesongMenuDemoModule,
        PuigthesongContextMenuDemoModule,
        PuigthesongPanelMenuDemoModule,
        PuigthesongStepsDemoModule,
        PuigthesongTieredMenuDemoModule,
        PuigthesongBreadcrumbDemoModule,
        PuigthesongMegaMenuDemoModule,
        PuigthesongMenuBarDemoModule,
        PuigthesongSlideMenuDemoModule,
        PuigthesongTabMenuDemoModule,

        PuigthesongBlockUIDemoModule,
        PuigthesongCaptchaDemoModule,
        PuigthesongDeferDemoModule,
        PuigthesongInplaceDemoModule,
        PuigthesongProgressBarDemoModule,
        PuigthesongInputMaskDemoModule,
        PuigthesongRTLDemoModule,
        PuigthesongTerminalDemoModule,
        PuigthesongValidationDemoModule,

        PuigthesongButtonDemoModule,
        PuigthesongSplitbuttonDemoModule,

        PuigthesongInputTextDemoModule,
        PuigthesongInputTextAreaDemoModule,
        PuigthesongInputGroupDemoModule,
        PuigthesongCalendarDemoModule,
        PuigthesongChipsDemoModule,
        PuigthesongInputMaskDemoModule,
        PuigthesongInputSwitchDemoModule,
        PuigthesongPasswordIndicatorDemoModule,
        PuigthesongAutoCompleteDemoModule,
        PuigthesongSliderDemoModule,
        PuigthesongSpinnerDemoModule,
        PuigthesongRatingDemoModule,
        PuigthesongSelectDemoModule,
        PuigthesongSelectButtonDemoModule,
        PuigthesongListboxDemoModule,
        PuigthesongRadioButtonDemoModule,
        PuigthesongToggleButtonDemoModule,
        PuigthesongEditorDemoModule,
        PuigthesongColorPickerDemoModule,
        PuigthesongCheckboxDemoModule,
        PuigthesongKeyFilterDemoModule,

        PuigthesongGrowlDemoModule,
        PuigthesongMessagesDemoModule,
        PuigthesongGalleriaDemoModule,

        PuigthesongFileUploadDemoModule,

        PuigthesongAccordionDemoModule,
        PuigthesongPanelDemoModule,
        PuigthesongTabViewDemoModule,
        PuigthesongFieldsetDemoModule,
        PuigthesongToolbarDemoModule,
        PuigthesongGridDemoModule,
        PuigthesongScrollPanelDemoModule,
        PuigthesongCardDemoModule,

        PuigthesongBarchartDemoModule,
        PuigthesongDoughnutchartDemoModule,
        PuigthesongLinechartDemoModule,
        PuigthesongPiechartDemoModule,
        PuigthesongPolarareachartDemoModule,
        PuigthesongRadarchartDemoModule,

        PuigthesongDragDropDemoModule,

        PuigthesongDialogDemoModule,
        PuigthesongConfirmDialogDemoModule,
        PuigthesongLightboxDemoModule,
        PuigthesongTooltipDemoModule,
        PuigthesongOverlayPanelDemoModule,
        PuigthesongSideBarDemoModule,

        PuigthesongDataTableDemoModule,
        PuigthesongTableDemoModule,
        PuigthesongDataGridDemoModule,
        PuigthesongDataListDemoModule,
        PuigthesongDataScrollerDemoModule,
        PuigthesongScheduleDemoModule,
        PuigthesongOrderListDemoModule,
        PuigthesongPickListDemoModule,
        PuigthesongTreeDemoModule,
        PuigthesongTreeTableDemoModule,
        PuigthesongPaginatorDemoModule,
        PuigthesongOrgChartDemoModule,
        PuigthesongGmapDemoModule,
        PuigthesongCarouselDemoModule,
        PuigthesongProgressSpinnerDemoModule

    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PuigthesongprimengModule {}
