Add-Type -AssemblyName System.Drawing

$bmp = [System.Drawing.Bitmap]::FromFile("d:\mci\reference\contact.png")

# Find exact bounds of the emblem and text
# The emblem is from y=360 to y=730, text is y=740 to 908, x from 415 to 790
$cropRect = [System.Drawing.Rectangle]::FromLTRB(415, 355, 792, 915)
$cropped = $bmp.Clone($cropRect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Make pure/near white pixels transparent
for ($y = 0; $y -lt $cropped.Height; $y++) {
    for ($x = 0; $x -lt $cropped.Width; $x++) {
        $c = $cropped.GetPixel($x, $y)
        if ($c.R -gt 245 -and $c.G -gt 245 -and $c.B -gt 245) {
            $cropped.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
        }
    }
}

$cropped.Save("d:\mci\public\assets\mci-logo-transparent.png", [System.Drawing.Imaging.ImageFormat]::Png)

# Also create the emblem only (just anchor + wheel)
$emblemRect = [System.Drawing.Rectangle]::FromLTRB(0, 0, $cropped.Width, 380)
$emblem = $cropped.Clone($emblemRect, $cropped.PixelFormat)
$emblem.Save("d:\mci\public\assets\mci-emblem.png", [System.Drawing.Imaging.ImageFormat]::Png)

Write-Output "Saved transparent logo and emblem successfully!"
$emblem.Dispose()
$cropped.Dispose()
$bmp.Dispose()
