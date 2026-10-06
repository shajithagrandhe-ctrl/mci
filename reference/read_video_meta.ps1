$sh = New-Object -ComObject Shell.Application
$f = $sh.Namespace('D:\mci\reference')
$it = $f.ParseName('activities (1).mp4')
for ($i = 0; $i -le 320; $i++) {
    $k = $f.GetDetailsOf($null, $i)
    $v = $f.GetDetailsOf($it, $i)
    if ($v -and $k) {
        Write-Output "$k : $v"
    }
}
