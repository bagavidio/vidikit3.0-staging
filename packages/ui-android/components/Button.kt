/**
 * VIDI Design System — Android Button (Jetpack Compose)
 * Reference implementation. Sync token values with colors.xml.
 *
 * Usage:
 *   VidiButton(text = "Save", intent = ButtonIntent.Primary, onClick = { ... })
 */

package com.vidi.designsystem.components

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

enum class ButtonIntent {
    Primary,
    Extended,
    Neutral,
    Ghost,
    Outline,
    Destructive,
}

enum class ButtonSize {
    Xs,
    Sm,
    Default,
    Lg,
}

@Composable
fun VidiButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    intent: ButtonIntent = ButtonIntent.Primary,
    size: ButtonSize = ButtonSize.Default,
    enabled: Boolean = true,
    loading: Boolean = false,
) {
    val (containerColor, contentColor) = when (intent) {
        ButtonIntent.Primary    -> colorResource(R.color.vidi_red_30)    to Color.White
        ButtonIntent.Extended   -> colorResource(R.color.vidi_blue_30)   to Color.White
        ButtonIntent.Neutral    -> colorResource(R.color.vidi_gray_70)   to colorResource(R.color.vidi_gray_10)
        ButtonIntent.Ghost      -> Color.White.copy(alpha = 0.05f)        to Color.White
        ButtonIntent.Outline    -> Color.Transparent                      to Color.White
        ButtonIntent.Destructive -> colorResource(R.color.vidi_state_error).copy(alpha = 0.1f) to colorResource(R.color.vidi_state_error)
    }

    val height = when (size) {
        ButtonSize.Xs      -> 24.dp
        ButtonSize.Sm      -> 32.dp
        ButtonSize.Default -> 36.dp
        ButtonSize.Lg      -> 40.dp
    }

    val fontSize = when (size) {
        ButtonSize.Xs -> 12.sp
        else          -> 14.sp
    }

    Button(
        onClick = onClick,
        modifier = modifier.height(height),
        enabled = enabled && !loading,
        shape = RoundedCornerShape(50),
        colors = ButtonDefaults.buttonColors(
            containerColor = containerColor,
            contentColor = contentColor,
        ),
    ) {
        Text(
            text = if (loading) "Loading…" else text,
            fontSize = fontSize,
        )
    }
}
