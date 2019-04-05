import * as tslib_1 from "tslib";
import * as React from 'react';
import MuiSwitch from '@material-ui/core/Switch';
export var fieldToSwitch = function (_a) {
    var field = _a.field, isSubmitting = _a.form.isSubmitting, _b = _a.disabled, disabled = _b === void 0 ? false : _b, props = tslib_1.__rest(_a, ["field", "form", "disabled"]);
    return tslib_1.__assign({ disabled: isSubmitting || disabled }, props, field, { value: field.name, checked: field.value });
};
export var Switch = function (props) { return React.createElement(MuiSwitch, tslib_1.__assign({}, fieldToSwitch(props))); };
Switch.displayName = 'FormikMaterialUISwitch';
//# sourceMappingURL=Switch.js.map