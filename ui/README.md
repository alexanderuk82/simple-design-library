# Design System Tokens

Generated from Figma on 11/14/2026, 04:51:03 AM

## 📁 Structure

```
ui/
├── tokens/
│   └── variables.json          # All design tokens (colors, spacing, typography, etc.)
│
├── components/
│   ├── button/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── button=primary.json
│   │       ├── button=secondary.json
│   │       └── ...
│   ├── discover-landing-page/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── type=default.json
│   │       ├── type=read-only.json
│   ├── portfolio-account-overview/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── access-level=full-access,----tab=overview,-individual-account=yes.json
│   │       ├── access-level=full-access,----tab=activity,-individual-account=yes.json
│   │       └── ...
│   ├── filter-refine-selection/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── variant=default-(no-changes-made).json
│   │       ├── variant=changes-made.json
│   ├── filter-single-selection/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── variant=blank.json
│   │       ├── variant=investment-types.json
│   │       └── ...
│   ├── filter-multi-selection/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── variant=blank.json
│   │       ├── variant=investment-type.json
│   ├── filter-custom-dates/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── mode=calendar.json
│   │       ├── mode=date-input.json
│   ├── placeholder/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── use=pdf.json
│   │       ├── use=webview.json
│   ├── global-loader-(full-screen)/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── background=aj-bell-red.json
│   │       ├── background=grey.json
│   ├── global-error-modal---api-failure/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── state=try-again-exhausted.json
│   │       ├── state=default.json
│   ├── first-time-experience-biometrics/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── os=android,-biometrics-type=face.json
│   │       ├── os=ios,-biometrics-type=face.json
│   │       └── ...
│   ├── app-splash-screen/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── phase=beta.json
│   │       ├── phase=post-mvp-(motion).json
│   ├── contract-note/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── variant=default.json
│   │       ├── variant=error-(wifi).json
│   │       └── ...
│   ├── tab-content/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── tab-content=overview.json
│   │       ├── tab-content=breakdown.json
│   │       └── ...
│   ├── card/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── input/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── select/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── table/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── modal/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── checkbox/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── bp---mobile/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── bp---tablet/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── bp---desktop/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── ios---compact-w-·-regular-h/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── ios---compact-w-·-compact-h/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── ios---regular-w-·-compact-h/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── ios---regular-w-·-regular-h/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── responsive-layout-·-master/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── reference-·-ios-matrix-(offset-=-t)-·-master/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── icon-home/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── icon-invest/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── icon-payments/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── icon-crypto/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── icon-more/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── icon-plus/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── icon-exchange/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── icon-send/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── icon-search/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── icon-settings/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── icon-bell/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── icon-chevron/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── icon-arrowup/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── icon-arrowdown/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── icon-wallet/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── icon-cart/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── icon-coffee/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── ui-actionbutton/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── ui-transactionrow/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── ui-accountrow/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── ui-bankcard/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── ui-navitem/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── ui-stattile/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── mobile-small-·-320/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── mobile-·-360-(android)/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── mobile-large-·-412-(android)/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── tablet-·-800-(android)/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── desktop-·-1440/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── responsive-layout-·-master-—-do-not-resize/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── responsive-layout-·-motion-·-master-—-do-not-resize/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── dr---card/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── dr---card-responsive/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── 7-·-tokens-responsive-·-un-componente,-3-modos,-cambio-automatico/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── dr---button/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── dr---listitem/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── ui---mobile/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── ui---tablet/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── ui---desktop/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── dashboard---mobile-360/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── dashboard---tablet-720/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── dashboard---desktop-1440/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── 10-·-dashboard-engine-·-360---720---1440/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── responsive-matrix/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── responsive-layout-·-master/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── responsive-layout-·-master/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── motion-test-·-tablet-·-800-(android)/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── motion-test-·-desktop-·-1440/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── f86-·-800/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── 86-·-360-(mobile)/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── 86-·-360-(mobile)/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── 86-·-412-(mobile)/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── 86-·-480-(mobile-large)/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── 86-·-768-(tablet)/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── 86-·-responsive-·-master-—-do-not-resize/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── sidebar/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── access-level=full-access,----tab=activity,-individual-account=yes-·-360-(mobile)/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── access-level=full-access,----tab=activity,-individual-account=yes-·-360-(mobile)/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── access-level=full-access,----tab=activity,-individual-account=yes-·-768-(tablet)/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── access-level=full-access,----tab=activity,-individual-account=yes-·-1100-(desktop)/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── access-level=full-access,----tab=activity,-individual-account=yes-·-1280-(desktop)/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── access-level=full-access,----tab=activity,-individual-account=yes-·-responsive-·-master-—-do-not-resize/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── access-level=full-access,----tab=activity,-individual-account=yes-·-responsive-·-motion-·-master-—-do-not-resize/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── state=state5-·-responsive-·-master-—-do-not-resize/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── art-cards/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── ui-button/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── onboarding-·-mobile-small-320/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── onboarding-·-mobile-375/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── onboarding-·-mobile-large-430/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── onboarding-·-tablet-834/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── onboarding-·-desktop-1440/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── responsive-layout-·-master-—-do-not-resize/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── responsive-layout-·-motion-·-master-—-do-not-resize/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── template-·-not-responsive/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── access-level=full-access,----tab=overview,-individual-account=yes-·-responsive-·-master-—-do-not-resize/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── type=read-only-·-responsive-·-master-—-do-not-resize/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── responsive-dashboard-v2-·-375-(mobile-portrait)/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── responsive-dashboard-v2-·-768-(tablet-portrait)/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── responsive-dashboard-v2-·-844-(mobile-landscape)/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── responsive-dashboard-v2-·-1024-(tablet-landscape)/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── responsive-dashboard-v2-·-1280-(laptop)/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│   ├── responsive-dashboard-v2-·-1440-(desktop)/
│   │   ├── metadata.json       # Component documentation
│   │   ├── tokens.json         # Design tokens used by this component
│   │   └── variants/           # Individual variant specifications
│   │       ├── default.json
│
└── README.md                   # This file
```

## 🎨 Variables (714 total)

Design tokens exported from Figma variables:

- **gray/50**: `#fafafa` (color)
- **gray/100**: `#f4f4f5` (color)
- **gray/200**: `#e4e4e7` (color)
- **gray/300**: `#d4d4d8` (color)
- **gray/400**: `#a1a1aa` (color)
- **gray/500**: `#71717a` (color)
- **gray/600**: `#52525b` (color)
- **gray/700**: `#3f3f46` (color)
- **gray/800**: `#27272a` (color)
- **gray/900**: `#18181b` (color)

... and 704 more

### Usage Example

```javascript
import tokens from './ui/tokens/variables.json';

// Access tokens
const primaryColor = tokens.Colors?.primary?.value;
const spacing = tokens.Spacing?.base?.value;
```

## 🧩 Components (110 total)

### Button

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=22:5)
- **Variants**: 3
- **Properties**: 1
- **File**: `components/button/metadata.json`

**Available Properties:**
- `Button`: VARIANT (Primary, Secondary, Ghost)

---

### Discover Landing Page

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=878:26225)
- **Variants**: 2
- **Properties**: 1
- **File**: `components/discover-landing-page/metadata.json`

**Available Properties:**
- `Type`: VARIANT (Default, Read Only)

---

### Portfolio/Account Overview

These screens depict the customer's account. Within their account, they can make account-specific actions, view their portfolio holdings, and check account activity.


Often referred as:
portfolio
002
account overview

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=878:30345)
- **Variants**: 8
- **Properties**: 4
- **File**: `components/portfolio-account-overview/metadata.json`

**Available Properties:**
- `Show Available to invest#40036191:0`: BOOLEAN
- `Access level`: VARIANT (Full access, Limited access, Read only)
- `-> Tab`: VARIANT (Activity, Overview)
- `Individual account`: VARIANT (Yes, No)

---

### Filter/Refine Selection

Use this pattern to help customers navigate large datasets, like a list of historical transactions spanning multiple months.

This pattern is designed to help customers refine and sort:
- a set of items in a list
- a set of search results

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=1324:124882)
- **Variants**: 2
- **Properties**: 1
- **File**: `components/filter-refine-selection/metadata.json`

**Available Properties:**
- `Variant`: VARIANT (Default (No changes made), Changes made)

---

### Filter/Single Selection

Use this pattern to help customers navigate large datasets, like a list of historical transactions spanning multiple months.

This pattern is designed to help customers refine and sort:
- a set of items in a list
- a set of search results

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=1324:124893)
- **Variants**: 3
- **Properties**: 1
- **File**: `components/filter-single-selection/metadata.json`

**Available Properties:**
- `Variant`: VARIANT (Blank, Investment types, Dates)

---

### Filter/Multi Selection

Use this pattern to help customers navigate large datasets, like a list of historical transactions spanning multiple months.

This pattern is designed to help customers refine and sort:
- a set of items in a list
- a set of search results

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=1324:124900)
- **Variants**: 2
- **Properties**: 1
- **File**: `components/filter-multi-selection/metadata.json`

**Available Properties:**
- `Variant`: VARIANT (Blank, Investment type)

---

### Filter/Custom Dates

Filtering datasets by date ranges uses the date picker component. Users can switch between calendar mode (the default) or numerical input.

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=1324:124908)
- **Variants**: 2
- **Properties**: 1
- **File**: `components/filter-custom-dates/metadata.json`

**Available Properties:**
- `Mode`: VARIANT (Calendar, Date input)

---

### Placeholder

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=1324:125130)
- **Variants**: 2
- **Properties**: 1
- **File**: `components/placeholder/metadata.json`

**Available Properties:**
- `Use`: VARIANT (PDF, Webview)

---

### Global/Loader (Full Screen)

Full screen loaders are used to bridge lengthy wait times within the app and major transitions.

Use this if:
wait times for a skeleton loader exceed 5 seconds
load times are expected to be lengthy, but we can't determine the duration

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=1324:125224)
- **Variants**: 2
- **Properties**: 2
- **File**: `components/global-loader-(full-screen)/metadata.json`

**Available Properties:**
- `Label#40039947:0`: TEXT
- `Background`: VARIANT (AJ Bell Red, Grey)

---

### Global/Error Modal - API Failure

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=1324:125264)
- **Variants**: 2
- **Properties**: 1
- **File**: `components/global-error-modal---api-failure/metadata.json`

**Available Properties:**
- `State`: VARIANT (Default, Try again exhausted)

---

### First Time Experience/Biometrics

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=1324:125295)
- **Variants**: 4
- **Properties**: 2
- **File**: `components/first-time-experience-biometrics/metadata.json`

**Available Properties:**
- `OS`: VARIANT (iOS, Android)
- `Biometrics type`: VARIANT (Face, Touch)

---

### App Splash Screen

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=1324:125316)
- **Variants**: 2
- **Properties**: 1
- **File**: `components/app-splash-screen/metadata.json`

**Available Properties:**
- `Phase`: VARIANT (Beta, Post MVP (Motion))

---

### Contract Note

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=1324:126266)
- **Variants**: 3
- **Properties**: 1
- **File**: `components/contract-note/metadata.json`

**Available Properties:**
- `Variant`: VARIANT (Default, Error (wifi), Error (API))

---

### Tab Content

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=1324:126468)
- **Variants**: 4
- **Properties**: 1
- **File**: `components/tab-content/metadata.json`

**Available Properties:**
- `Tab Content`: VARIANT (Overview, Breakdown, Dividends, Documents)

---

### Card

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=22:12)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/card/metadata.json`



---

### Input

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=57:2)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/input/metadata.json`



---

### Select

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=58:2)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/select/metadata.json`



---

### Table

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=58:7)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/table/metadata.json`



---

### Modal

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=59:2)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/modal/metadata.json`



---

### Checkbox

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=61:2)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/checkbox/metadata.json`



---

### BP / Mobile

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=468:62)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/bp---mobile/metadata.json`



---

### BP / Tablet

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=468:81)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/bp---tablet/metadata.json`



---

### BP / Desktop

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=468:106)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/bp---desktop/metadata.json`



---

### iOS / Compact W · Regular H

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=510:161)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/ios---compact-w-·-regular-h/metadata.json`



---

### iOS / Compact W · Compact H

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=510:162)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/ios---compact-w-·-compact-h/metadata.json`



---

### iOS / Regular W · Compact H

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=511:155)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/ios---regular-w-·-compact-h/metadata.json`



---

### iOS / Regular W · Regular H

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=511:156)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/ios---regular-w-·-regular-h/metadata.json`



---

### Responsive Layout · master

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=509:4906)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/responsive-layout-·-master/metadata.json`



---

### Reference · iOS matrix (offset = T) · master

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=514:839)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/reference-·-ios-matrix-(offset-=-t)-·-master/metadata.json`



---

### icon/home

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=517:63)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/icon-home/metadata.json`



---

### icon/invest

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=517:67)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/icon-invest/metadata.json`



---

### icon/payments

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=517:71)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/icon-payments/metadata.json`



---

### icon/crypto

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=517:75)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/icon-crypto/metadata.json`



---

### icon/more

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=517:78)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/icon-more/metadata.json`



---

### icon/plus

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=517:81)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/icon-plus/metadata.json`



---

### icon/exchange

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=517:84)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/icon-exchange/metadata.json`



---

### icon/send

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=517:87)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/icon-send/metadata.json`



---

### icon/search

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=517:90)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/icon-search/metadata.json`



---

### icon/settings

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=517:94)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/icon-settings/metadata.json`



---

### icon/bell

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=517:97)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/icon-bell/metadata.json`



---

### icon/chevron

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=517:100)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/icon-chevron/metadata.json`



---

### icon/arrowUp

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=517:103)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/icon-arrowup/metadata.json`



---

### icon/arrowDown

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=517:106)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/icon-arrowdown/metadata.json`



---

### icon/wallet

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=517:110)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/icon-wallet/metadata.json`



---

### icon/cart

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=517:114)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/icon-cart/metadata.json`



---

### icon/coffee

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=517:118)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/icon-coffee/metadata.json`



---

### ui/ActionButton

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=518:51)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/ui-actionbutton/metadata.json`



---

### ui/TransactionRow

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=518:63)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/ui-transactionrow/metadata.json`



---

### ui/AccountRow

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=518:73)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/ui-accountrow/metadata.json`



---

### ui/BankCard

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=518:83)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/ui-bankcard/metadata.json`



---

### ui/NavItem

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=518:88)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/ui-navitem/metadata.json`



---

### ui/StatTile

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=518:96)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/ui-stattile/metadata.json`



---

### Mobile small · 320

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=527:7352)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/mobile-small-·-320/metadata.json`



---

### Mobile · 360 (Android)

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=527:7353)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/mobile-·-360-(android)/metadata.json`



---

### Mobile large · 412 (Android)

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=527:7354)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/mobile-large-·-412-(android)/metadata.json`



---

### Tablet · 800 (Android)

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=527:7355)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/tablet-·-800-(android)/metadata.json`



---

### Desktop · 1440

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=527:7356)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/desktop-·-1440/metadata.json`



---

### Responsive Layout · master — do not resize

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=668:3332)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/responsive-layout-·-master-—-do-not-resize/metadata.json`



---

### Responsive Layout · motion · master — do not resize

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=668:6073)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/responsive-layout-·-motion-·-master-—-do-not-resize/metadata.json`



---

### DR / Card

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=475:51)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/dr---card/metadata.json`



---

### DR / Card responsive

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=488:247)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/dr---card-responsive/metadata.json`



---

### 7 · TOKENS RESPONSIVE  ·  un componente, 3 modos, cambio automatico

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=491:377)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/7-·-tokens-responsive-·-un-componente,-3-modos,-cambio-automatico/metadata.json`



---

### DR / Button

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=493:417)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/dr---button/metadata.json`



---

### DR / ListItem

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=493:423)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/dr---listitem/metadata.json`



---

### UI / Mobile

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=494:443)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/ui---mobile/metadata.json`



---

### UI / Tablet

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=494:491)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/ui---tablet/metadata.json`



---

### UI / Desktop

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=494:546)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/ui---desktop/metadata.json`



---

### Dashboard / Mobile 360

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=499:539)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/dashboard---mobile-360/metadata.json`



---

### Dashboard / Tablet 720

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=499:569)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/dashboard---tablet-720/metadata.json`



---

### Dashboard / Desktop 1440

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=499:611)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/dashboard---desktop-1440/metadata.json`



---

### 10 · DASHBOARD ENGINE  ·  360 / 720 / 1440

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=501:3810)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/10-·-dashboard-engine-·-360---720---1440/metadata.json`



---

### Responsive Matrix

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=506:1394)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/responsive-matrix/metadata.json`



---

### Responsive Layout · master

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=508:4295)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/responsive-layout-·-master/metadata.json`



---

### Responsive Layout · master

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=509:4589)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/responsive-layout-·-master/metadata.json`



---

### MOTION TEST · Tablet · 800 (Android)

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=664:816)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/motion-test-·-tablet-·-800-(android)/metadata.json`



---

### MOTION TEST · Desktop · 1440

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=664:911)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/motion-test-·-desktop-·-1440/metadata.json`



---

### F86 · 800

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=681:95593)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/f86-·-800/metadata.json`



---

### 86 · 360 (mobile)

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=746:22472)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/86-·-360-(mobile)/metadata.json`



---

### 86 · 360 (mobile)

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=746:22473)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/86-·-360-(mobile)/metadata.json`



---

### 86 · 412 (mobile)

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=746:22474)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/86-·-412-(mobile)/metadata.json`



---

### 86 · 480 (mobile large)

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=746:22475)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/86-·-480-(mobile-large)/metadata.json`



---

### 86 · 768 (tablet)

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=746:22476)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/86-·-768-(tablet)/metadata.json`



---

### 86 · responsive · master — do not resize

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=746:23667)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/86-·-responsive-·-master-—-do-not-resize/metadata.json`



---

### Sidebar

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=864:209767)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/sidebar/metadata.json`



---

### Access level=Full access, -> Tab=Activity, Individual account=Yes · 360 (mobile)

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=878:211891)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/access-level=full-access,----tab=activity,-individual-account=yes-·-360-(mobile)/metadata.json`



---

### Access level=Full access, -> Tab=Activity, Individual account=Yes · 360 (mobile)

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=878:211892)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/access-level=full-access,----tab=activity,-individual-account=yes-·-360-(mobile)/metadata.json`



---

### Access level=Full access, -> Tab=Activity, Individual account=Yes · 768 (tablet)

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=878:211893)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/access-level=full-access,----tab=activity,-individual-account=yes-·-768-(tablet)/metadata.json`



---

### Access level=Full access, -> Tab=Activity, Individual account=Yes · 1100 (desktop)

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=878:211894)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/access-level=full-access,----tab=activity,-individual-account=yes-·-1100-(desktop)/metadata.json`



---

### Access level=Full access, -> Tab=Activity, Individual account=Yes · 1280 (desktop)

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=878:211895)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/access-level=full-access,----tab=activity,-individual-account=yes-·-1280-(desktop)/metadata.json`



---

### Access level=Full access, -> Tab=Activity, Individual account=Yes · responsive · master — do not resize

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=878:219653)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/access-level=full-access,----tab=activity,-individual-account=yes-·-responsive-·-master-—-do-not-resize/metadata.json`



---

### Access level=Full access, -> Tab=Activity, Individual account=Yes · responsive · motion · master — do not resize

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=878:238656)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/access-level=full-access,----tab=activity,-individual-account=yes-·-responsive-·-motion-·-master-—-do-not-resize/metadata.json`



---

### State=State5 · responsive · master — do not resize

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=989:117900)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/state=state5-·-responsive-·-master-—-do-not-resize/metadata.json`



---

### art/Cards

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=563:68)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/art-cards/metadata.json`



---

### ui/Button

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=563:71)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/ui-button/metadata.json`



---

### Onboarding · Mobile small 320

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=566:84)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/onboarding-·-mobile-small-320/metadata.json`



---

### Onboarding · Mobile 375

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=566:85)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/onboarding-·-mobile-375/metadata.json`



---

### Onboarding · Mobile large 430

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=566:86)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/onboarding-·-mobile-large-430/metadata.json`



---

### Onboarding · Tablet 834

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=566:87)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/onboarding-·-tablet-834/metadata.json`



---

### Onboarding · Desktop 1440

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=566:88)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/onboarding-·-desktop-1440/metadata.json`



---

### Responsive Layout · master — do not resize

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=558:11554)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/responsive-layout-·-master-—-do-not-resize/metadata.json`



---

### Responsive Layout · motion · master — do not resize

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=558:12186)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/responsive-layout-·-motion-·-master-—-do-not-resize/metadata.json`



---

### Template · not responsive

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=577:66)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/template-·-not-responsive/metadata.json`



---

### Access level=Full access, -> Tab=Overview, Individual account=Yes · responsive · master — do not resize

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=1455:268251)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/access-level=full-access,----tab=overview,-individual-account=yes-·-responsive-·-master-—-do-not-resize/metadata.json`



---

### Type=Read Only · responsive · master — do not resize

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=1455:310068)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/type=read-only-·-responsive-·-master-—-do-not-resize/metadata.json`



---

### Responsive Dashboard v2 · 375 (mobile portrait)

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=1309:126987)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/responsive-dashboard-v2-·-375-(mobile-portrait)/metadata.json`



---

### Responsive Dashboard v2 · 768 (tablet portrait)

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=1309:126988)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/responsive-dashboard-v2-·-768-(tablet-portrait)/metadata.json`



---

### Responsive Dashboard v2 · 844 (mobile landscape)

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=1309:126989)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/responsive-dashboard-v2-·-844-(mobile-landscape)/metadata.json`



---

### Responsive Dashboard v2 · 1024 (tablet landscape)

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=1309:126990)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/responsive-dashboard-v2-·-1024-(tablet-landscape)/metadata.json`



---

### Responsive Dashboard v2 · 1280 (laptop)

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=1309:126991)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/responsive-dashboard-v2-·-1280-(laptop)/metadata.json`



---

### Responsive Dashboard v2 · 1440 (desktop)

- **Figma**: [View in Figma](https://www.figma.com/file/undefined?node-id=1309:126992)
- **Variants**: 1
- **Properties**: 0
- **File**: `components/responsive-dashboard-v2-·-1440-(desktop)/metadata.json`




## 🔄 Updates

This export includes:
- **714** new variables
- **0** updated variables
- **110** new components
- **0** updated components

## 📖 How to Use

### 1. Variables/Tokens

Use the `tokens/variables.json` file to:
- Generate CSS custom properties
- Create design token configs for your framework
- Keep design and code in sync

### 2. Components

Use the `components/*/metadata.json` files to:
- Understand component structure and variants
- Generate component code scaffolding
- Document component APIs

### 3. Integration

These JSON files can be consumed by:
- **Style Dictionary** - Transform tokens to various formats
- **Storybook** - Document components
- **Custom scripts** - Generate code from metadata

---

🤖 Generated with [Design System Sync Plugin](https://github.com/your-repo)
