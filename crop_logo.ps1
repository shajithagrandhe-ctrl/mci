Add-Type -AssemblyName System.Drawing

$bmp = [System.Drawing.Bitmap]::FromFile("d:\mci\reference\contact.png")

# Logo is in y: 340 to 920, x: 400 to 800
$lMinX = 9999; $lMaxX = 0; $lMinY = 9999; $lMaxY = 0
for ($y = 350; $y -lt 920; $y++) {
    for ($x = 400; $x -lt 800; $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) {
            if ($x -lt $lMinX) { $lMinX = $x }
            if ($x -gt $lMaxX) { $lMaxX = $x }
            if ($y -lt $lMinY) { $lMinY = $y }
            if ($y -gt $lMaxY) { $lMaxY = $y }
        }
    }
}
Write-Output "Middle card Logo exact bounds: minX=$lMinX, maxX=$lMaxX, minY=$lMinY, maxY=$lMaxY, W=$($lMaxX-$lMinX+1), H=$($lMaxY-$lMinY+1)"

# Let's crop it with a small margin of 10px
$cropRect = [System.Drawing.Rectangle]::FromLTRB($lMinX - 10, $lMinY - 10, $lMaxX + 10, $lMaxY + 10)
$cropped = $bmp.Clone($cropRect, $bmp.PixelFormat)

New-Item -ItemType Directory -Force -Path "d:\mci\public\assets"
$cropped.Save("d:\mci\public\assets\mci-logo-original.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Output "Saved cropped logo to d:\mci\public\assets\mci-logo-original.png"

$cropped.Dispose()
$bmp.Dispose()
