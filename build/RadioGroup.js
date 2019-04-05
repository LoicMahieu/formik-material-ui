import * as tslib_1 from "tslib";
import * as React from 'react';
import MuiRadioGroup from '@material-ui/core/RadioGroup';
export var fieldToRadioGroup = function (_a) {
    var field = _a.field, form = _a.form, props = tslib_1.__rest(_a, ["field", "form"]);
    return (tslib_1.__assign({}, props, field));
};
export var RadioGroup = function (props) {
    return React.createElement(MuiRadioGroup, tslib_1.__assign({}, fieldToRadioGroup(props)));
};
RadioGroup.displayName = 'FormikMaterialUIRadioGroup';
//# sourceMappingURL=RadioGroup.js.map