מדריך הטמעת כפתור 3D AR באתר TUDO
1. הטמעת הכפתור באתר
כדי להוסיף את כפתור ה-3D AR, יש להעתיק את קוד ה-HTML הבא ולהדביק אותו בקוד העמוד באתר שלכם, במקום שבו תרצו שהכפתור יופיע.

הדוגמה הבאה מראה כיצד להוסיף את הכפתור מתחת לתמונת מוצר.

HTML

<img src="/path/to/your/product-image.jpg" alt="שם המוצר">
<p>תיאור המוצר</p>

<button class="my-3d-button">3D AR</button>
2. הטמעת הפופאפ והסקריפטים
לאחר שהוספתם את הכפתור, יש להוסיף את הקוד שמנהל את הפופאפ עצמו. את הקוד הזה מומלץ להדביק בסוף קובץ ה-HTML, רגע לפני תגית הסגירה </body>.

HTML

<div id="arModal" class="modal">
    <div class="modal-content">
        <span class="close-button">&times;</span>
        <iframe id="arIframe" src="https://jontimi.github.io/3dModelARviewer/?brand=tudo" frameborder="0" allow="xr-spatial-tracking" allowfullscreen></iframe>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        var modal = document.getElementById('arModal');
        var iframe = document.getElementById('arIframe');
        var closeButton = document.querySelector('.close-button');
        var my3dButton = document.querySelector('.my-3d-button');
        
        if (modal && iframe && closeButton && my3dButton) {
            my3dButton.addEventListener('click', function() {
                modal.style.display = 'flex';
            });

            closeButton.addEventListener('click', function() {
                modal.style.display = 'none';
                iframe.src = 'https://jontimi.github.io/3dModelARviewer/?brand=tudo'; 
            });

            window.addEventListener('click', function(event) {
                if (event.target == modal) {
                    modal.style.display = 'none';
                    iframe.src = 'https://jontimi.github.io/3dModelARviewer/?brand=tudo'; 
                }
            });
        }
    });
</script>
3. הטמעת העיצוב (CSS)
הדביקו את קוד ה-CSS המלא הבא בגיליון העיצוב שלכם (CSS), או הוסיפו אותו ישירות לתוך תגית <style> בחלק ה-<head> של דף ה-HTML.

CSS

<style>
    body {
        /* ... עיצוב קיים של גוף הדף ... */
    }

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
התאמה אישית: שינוי מיקום הכפתור
כדי לשנות את מיקום הכפתור, יש לשנות את המיקום של קוד ה-HTML של הכפתור:

כפתור בעמוד הראשי: אם תרצו שהכפתור יופיע במקום אחר, פשוט הזיזו את שורת הקוד <button class="my-3d-button">3D AR</button> למיקום הרצוי בתוך קוד העמוד שלכם.

כפתור בתוך הפופאפ: הכפתורים בתוך חלון הפופאפ מנוהלים על ידי האתר החיצוני, ולכן אין צורך לשנות אותם.

אם יש צורך לשנות את העיצוב של הכפתור, ניתן לערוך את תכונות ה-CSS תחת המחלקה .my-3d-button. לדוגמה, כדי לשנות את צבע הכפתור, יש לשנות את הערך של background-color.
