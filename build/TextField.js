import * as tslib_1 from "tslib";
import * as React from 'react';
import MuiTextField from '@material-ui/core/TextField';
import { getIn } from 'formik';
export var fieldToTextField = function (_a) {
    var field = _a.field, form = _a.form, variant = _a.variant, _b = _a.disabled, disabled = _b === void 0 ? false : _b, error = _a.error, props = tslib_1.__rest(_a, ["field", "form", "variant", "disabled", "error"]);
    var name = field.name;
    var touched = form.touched, errors = form.errors, isSubmitting = form.isSubmitting;
    var fieldError = getIn(errors, name);
    var showError = getIn(touched, name) && !!fieldError;
    return tslib_1.__assign({}, props, field, { variant: variant, error: showError || error, helperText: showError ? fieldError : props.helperText, disabled: isSubmitting || disabled });
};
export var TextField = function (_a) {
    var children = _a.children, props = tslib_1.__rest(_a, ["children"]);
    return (React.createElement(MuiTextField, tslib_1.__assign({}, fieldToTextField(props), { children: children })));
};
TextField.displayName = 'FormikMaterialUITextField';
//# sourceMappingURL=TextField.js.map