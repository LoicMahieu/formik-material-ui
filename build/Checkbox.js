import * as tslib_1 from "tslib";
import * as React from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
export var fieldToCheckbox = function (_a) {
    var field = _a.field, isSubmitting = _a.form.isSubmitting, _b = _a.disabled, disabled = _b === void 0 ? false : _b, props = tslib_1.__rest(_a, ["field", "form", "disabled"]);
    return tslib_1.__assign({ disabled: isSubmitting || disabled }, props, field, { checked: field.value ? 'checked' : '', value: field.value ? 'checked' : '' });
};
export var Checkbox = function (props) { return React.createElement(MuiCheckbox, tslib_1.__assign({}, fieldToCheckbox(props))); };
Checkbox.displayName = 'FormikMaterialUICheckbox';
//# sourceMappingURL=Checkbox.js.map