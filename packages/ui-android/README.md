# @vidikit/ui-android

Android (Jetpack Compose) reference implementations for the VIDI Design System.

## Usage

This package contains reference token files and component stubs. To use in an Android project:

1. Copy `tokens/colors.xml` → `res/values/colors.xml` in your Android project
2. Use `components/Button.kt` as a reference for implementing Compose components

## Token Sync

Tokens are generated from the TypeScript source in `@vidikit/tokens`. To regenerate:

```sh
pnpm run tokens:sync
```

This updates `tokens/colors.xml` automatically.
