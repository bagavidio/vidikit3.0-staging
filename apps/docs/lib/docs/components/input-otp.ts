/**
 * VIDI Docs — Input OTP Component Snippets
 * ─────────────────────────────────────────────────────────────
 * Hand-curated code snippets for all 5 platforms.
 */

export const inputOtpSnippets = {
  React: {
    installation: `import {
  InputOTP, InputOTPGroup,
  InputOTPSlot, InputOTPSeparator,
} from "@vidikit/ui-react";`,

    fourDigit: `<InputOTP maxLength={4}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>`,

    sixDigit: `// Continuous
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>

// With separator (3 + 3)
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`,

    numeric: `// Restrict to digits only
<InputOTP maxLength={6} pattern="[0-9]*">
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`,

    disabled: `<InputOTP maxLength={4} disabled>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>`,
  },

  TV: {
    installation: `// TV: OTP input is rare — consider QR code authentication instead.
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@vidikit/ui-react";`,

    basic: `// For TV login flows, prefer:
// 1. QR code scan with mobile device
// 2. Code displayed on screen, entered on website
// 3. As a last resort, OTP via on-screen keyboard

// If using OTP on TV:
<InputOTP maxLength={4}>
  <InputOTPGroup>
    <InputOTPSlot index={0} className="size-14 text-2xl" />
    <InputOTPSlot index={1} className="size-14 text-2xl" />
    <InputOTPSlot index={2} className="size-14 text-2xl" />
    <InputOTPSlot index={3} className="size-14 text-2xl" />
  </InputOTPGroup>
</InputOTP>`,
  },

  "Mobile Web": {
    installation: `import { InputOTP, InputOTPGroup, InputOTPSlot } from "@vidikit/ui-react";
// Same import as React.`,

    basic: `// Mobile Web: auto-fill from SMS
// Set autoComplete="one-time-code" for browser auto-fill
<InputOTP maxLength={6} autoComplete="one-time-code">
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>

// Pattern for auto-submit on completion:
// <InputOTP onComplete={(code) => verifyCode(code)} />`,
  },

  Android: {
    installation: `// Import in Compose:
import com.vidi.designsystem.components.VidiOtpTextField`,

    basic: `var code by remember { mutableStateOf("") }

VidiOtpTextField(
    value = code,
    onValueChange = { code = it },
    length = 6,
    onComplete = { verifyCode(it) }
)

// Numeric-only OTP
VidiOtpTextField(
    value = code,
    onValueChange = { code = it },
    length = 4,
    keyboardType = KeyboardType.Number
)`,

    colors: `// Token references from res/values/colors.xml
// Slot border:   @color/vidi_gray_20   (#E4E4E7)
// Active slot:   @color/vidi_red_30    (#FD1B44)
// Caret:         @color/vidi_red_30    (#FD1B44)
// Separator:     @color/vidi_gray_30   (#A1A1AA)`,
  },

  iOS: {
    installation: `import SwiftUI`,

    basic: `@State private var code = ""

// Use .oneTimeCode content type for SMS auto-fill
VidiOTPField(
    code: $code,
    length: 6,
    onComplete: { verifyCode($0) }
)

// Native approach with textContentType:
TextField("Code", text: $code)
    .textContentType(.oneTimeCode)
    .keyboardType(.numberPad)`,

    colors: `// Token references from Colors.swift
Color.vidiGray20  // #E4E4E7 — slot border
Color.vidiRed30   // #FD1B44 — active slot / caret
Color.vidiGray30  // #A1A1AA — separator`,
  },
} as const;

export const inputOtpProps = [
  {
    name: "maxLength",
    type: "number",
    required: true,
    description: "Total number of OTP slots (4, 6, or 8).",
  },
  {
    name: "pattern",
    type: "string",
    description: 'Regex pattern to restrict input (e.g. "[0-9]*" for numeric).',
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables all OTP slots.",
  },
  {
    name: "autoComplete",
    type: "string",
    default: "—",
    description: 'Set to "one-time-code" for SMS auto-fill on mobile.',
  },
  {
    name: "onComplete",
    type: "(code: string) => void",
    description: "Callback when all slots are filled.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional Tailwind classes merged via cn().",
  },
];
