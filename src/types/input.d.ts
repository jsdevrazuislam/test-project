interface InputProps {
    type?: string;
    label?: string;
    bindValue: string;
    placeholder?: string;
    required?: boolean;
    error?: string;
  }

interface CheckboxProps {
    label: string;
    bindChecked: boolean;
    required?: boolean;
    linkText?: string;
    linkHref?: string;
  }