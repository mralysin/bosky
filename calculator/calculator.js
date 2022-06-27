
const $bosky = document.querySelector('.sign')

const $lis = document.querySelectorAll('ul li')
        $lis.forEach((node) => {
            node.addEventListener('mousedown', function(e){
                // event.preventDefault()
                const value = node.innerText.trim() // our button values
                const $display = document.querySelector('.display') // our display
                // $display.innerText = value  Changes the display value  per click

                var displayText = $display.innerText.trim() //tirms the imput of any space;
               
                if (displayText == '0' || displayText == 'undefined' || displayText == 'Infinity' ){
                $display.innerText = ``
                }

                if (value == "="){
                let solve = eval(displayText)
                $display.innerText = solve
                return true
                }

                if (value == "%"){
                let solvent = displayText / 100
                $display.innerText = solvent
                return true
                }

                if (value == "M"){
                let saved = ''
                    shwsaved = saved + displayText
                $display.innerText = shwsaved
                return true
                }

                if (value == "Memory Recall"){
                $display.innerText = shwsaved
                return true
                }
                
            
                // if (value == "="){
                // let solve = eval(displayText)
                // $display.innerText = solve
                // return true
                // }
                
                if (value == '⇚') {
                    $display.innerText = ``
                    return true
                }

                $display.append(value) // causes the value to show on the display
                

            })

        })
