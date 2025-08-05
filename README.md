אתה צודק, יונתן, אני מתנצל על זה. בתשובה הקודמת, בגלל מגבלות טכניות, העיצוב הועבר בצורה של קטעי קוד, מה שיצר בעיה במקום פתרון.

הנה גרסה מתוקנת ומסודרת של המדריך, המפרטת בדיוק היכן יש להדביק כל חלק בקוד של האתר שלכם. הפעם, הטקסטים וההסברים מוצגים באופן ברור כטקסט רגיל, ללא צורך בהדבקת לינקים או קוד.

-----

### **מדריך הטמעה לצוות TUDO**

#### **1. הטמעת כפתור ה-3D AR (קוד HTML)**

אתם צריכים להעתיק את שורת הקוד הזו ולהדביק אותה במקום שבו תרצו שהכפתור יופיע בדף. לדוגמה, מתחת לתמונת המוצר או לצד המידות שלו.

```html
<button class="my-3d-button">3D AR</button>
```

#### **2. הוספת חלון הפופאפ והסקריפט (קוד HTML)**

את כל הבלוק הבא יש להעתיק ולהדביק **בסוף קובץ ה-HTML של דף המוצר**, ממש לפני תגית הסגירה `</body>`. זה מכיל את החלון הקופץ עצמו ואת הקוד שמפעיל אותו.

```html
<div id="arModal" class="modal">
    <div class="modal-content">
        <span class="close-button">&times;</span>
        <iframe id="arIframe" src="https://jontimi.github.io/3dModelARviewer/?brand=tudo" frameborder="0" allow="xr-spatial-tracking" allowfullscreen></iframe>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        var modal = document.getElementById('arModal');
        var closeButton = document.querySelector('.close-button');
        var my3dButton = document.querySelector('.my-3d-button');
        
        if (modal && closeButton && my3dButton) {
            my3dButton.addEventListener('click', function() {
                modal.style.display = 'flex';
            });

            closeButton.addEventListener('click', function() {
                modal.style.display = 'none';
            });

            window.addEventListener('click', function(event) {
                if (event.target == modal) {
                    modal.style.display = 'none';
                }
            });
        }
    });
</script>
```

#### **3. הוספת העיצוב (קוד CSS)**

את כל הבלוק הבא יש להעתיק ולהדביק בקובץ ה-CSS הראשי של האתר. לחלופין, אפשר להוסיף אותו בתוך תגית `<style>` בחלק ה-`<head>` של דף ה-HTML.

```css
<style>
    /* העיצוב של הכפתור */
    .my-3d-button {
        background-color: #70c057;
        color: white;
        padding: 15px 30px;
        font-size: 16px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
        white-space: nowrap;
    }

    .my-3d-button:hover {
        background-color: #5aa741;
    }
    
    /* העיצוב של החלון הקופץ */
    .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);
        justify-content: center;
        align-items: center;
    }

    .modal-content {
        background-color: #fefefe;
        margin: auto;
        padding: 0;
        border: 1px solid #888;
        width: 90%;
        max-width: 900px;
        height: 90vh; 
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        position: relative;
        text-align: center;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .close-button {
        position: absolute;
        top: 10px;
        right: 15px;
        color: #aaa;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        z-index: 1001;
    }

    .close-button:hover,
    .close-button:focus {
        color: black;
        text-decoration: none;
    }

    #arIframe {
        width: 100%;
        height: 100%;
        border: none;
    }
</style>
```
