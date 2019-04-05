import * as React from 'react';
import { getIn } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
export var SimpleFileUpload = function (_a) {
    var label = _a.label, field = _a.field, _b = _a.form, touched = _b.touched, errors = _b.errors, isSubmitting = _b.isSubmitting, setFieldValue = _b.setFieldValue, _c = _a.disabled, disabled = _c === void 0 ? false : _c;
    var error = getIn(touched, field.name) && getIn(errors, field.name);
    return (React.createElement("div", null,
        React.createElement(FormControl, null,
            label && (React.createElement(InputLabel, { shrink: true, error: !!error }, label)),
            React.createElement(Input, { error: !!error, inputProps: {
                    type: 'file',
                    disabled: disabled || isSubmitting,
                    name: field.name,
                    onChange: function (event) {
                        var file = event.currentTarget.files[0];
                        setFieldValue(field.name, file);
                    },
                } }),
            error && React.createElement(FormHelperText, { error: true }, error))));
};
//# sourceMappingURL=SimpleFileUpload.js.map